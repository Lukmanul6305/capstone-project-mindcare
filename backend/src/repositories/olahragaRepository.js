import db from "../config/Database.js";
import { QueryTypes } from "sequelize";

const olahragaRepository = {
    async create(userId, { jenis, jarak_km, durasi_menit, rute_maps, tanggal }) {
        const [id] = await db.query(
            "INSERT INTO tb_olahraga (user_id, jenis, jarak_km, durasi_menit, rute_maps, tanggal) VALUES (?, ?, ?, ?, ?, ?)",
            {
                replacements: [
                    userId,
                    jenis,
                    jarak_km,
                    durasi_menit,
                    JSON.stringify(rute_maps ?? []),
                    tanggal
                ],
                type: QueryTypes.INSERT
            }
        );

        return this.findById(id);
    },

    async findAllByUserId(userId) {
        return await db.query(
            "SELECT * FROM tb_olahraga WHERE user_id = ? ORDER BY tanggal DESC",
            {
                replacements: [userId],
                type: QueryTypes.SELECT
            }
        );
    },

    async findById(id) {
        const [olahraga] = await db.query(
            "SELECT * FROM tb_olahraga WHERE id = ? LIMIT 1",
            {
                replacements: [id],
                type: QueryTypes.SELECT
            }
        );
        return olahraga;
    },

    async findByIdAndUserId(id, userId) {
        const [olahraga] = await db.query(
            "SELECT * FROM tb_olahraga WHERE id = ? AND user_id = ? LIMIT 1",
            {
                replacements: [id, userId],
                type: QueryTypes.SELECT
            }
        );
        return olahraga;
    },

    async deleteById(id) {
        await db.query(
            "DELETE FROM tb_olahraga WHERE id = ?",
            {
                replacements: [id],
                type: QueryTypes.DELETE
            }
        );
    },

    async getStatisticsByUserId(userId) {
        const [allTime] = await db.query(
            "SELECT COALESCE(SUM(jarak_km), 0) as total_jarak, COALESCE(SUM(durasi_menit), 0) as total_durasi, COUNT(id) as total_sesi FROM tb_olahraga WHERE user_id = ?",
            {
                replacements: [userId],
                type: QueryTypes.SELECT
            }
        );

        const [hariIni] = await db.query(
            "SELECT COALESCE(SUM(jarak_km), 0) as total_jarak, COALESCE(SUM(durasi_menit), 0) as total_durasi, COUNT(id) as total_sesi FROM tb_olahraga WHERE user_id = ? AND DATE(tanggal) = CURDATE()",
            {
                replacements: [userId],
                type: QueryTypes.SELECT
            }
        );

        const [mingguIni] = await db.query(
            "SELECT COALESCE(SUM(jarak_km), 0) as total_jarak, COALESCE(SUM(durasi_menit), 0) as total_durasi, COUNT(id) as total_sesi FROM tb_olahraga WHERE user_id = ? AND YEARWEEK(tanggal, 1) = YEARWEEK(CURDATE(), 1)",
            {
                replacements: [userId],
                type: QueryTypes.SELECT
            }
        );

        const [bulanIni] = await db.query(
            "SELECT COALESCE(SUM(jarak_km), 0) as total_jarak, COALESCE(SUM(durasi_menit), 0) as total_durasi, COUNT(id) as total_sesi FROM tb_olahraga WHERE user_id = ? AND MONTH(tanggal) = MONTH(CURDATE()) AND YEAR(tanggal) = YEAR(CURDATE())",
            {
                replacements: [userId],
                type: QueryTypes.SELECT
            }
        );

        return {
            all_time: allTime,
            hari_ini: hariIni,
            minggu_ini: mingguIni,
            bulan_ini: bulanIni
        };
    },
    async getStatisticsGroupedByJenis(userId) {
        const [overallStats] = await db.query(`
        SELECT 
            COUNT(*) as total_aktivitas,
            COALESCE(SUM(jarak_km), 0) as total_jarak_km,
            COALESCE(SUM(durasi_menit), 0) as total_durasi_menit,
            COALESCE(AVG(jarak_km), 0) as rata_rata_jarak_km,
            COALESCE(AVG(durasi_menit), 0) as rata_rata_durasi_menit
        FROM tb_olahraga 
        WHERE user_id = $1
    `, {
            bind: [userId]
        });

        const [statsByJenis] = await db.query(`
        SELECT 
            jenis,
            COUNT(*) as total_aktivitas,
            COALESCE(SUM(jarak_km), 0) as total_jarak_km,
            COALESCE(SUM(durasi_menit), 0) as total_durasi_menit,
            COALESCE(AVG(jarak_km), 0) as rata_rata_jarak_km,
            COALESCE(AVG(durasi_menit), 0) as rata_rata_durasi_menit,
            COALESCE(AVG((jarak_km / durasi_menit) * 60), 0) as rata_rata_kecepatan_km_per_jam
        FROM tb_olahraga 
        WHERE user_id = $1
        GROUP BY jenis
        ORDER BY jenis
    `, {
            bind: [userId]
        });
        const [aktivitasTerbaru] = await db.query(`
        SELECT 
            id,
            jenis,
            jarak_km,
            durasi_menit,
            rute_maps,
            tanggal,
            createdAt,
            ROUND((jarak_km / NULLIF(durasi_menit, 0)) * 60, 2) as kecepatan_km_per_jam
        FROM tb_olahraga 
        WHERE user_id = $1
        ORDER BY tanggal DESC, createdAt DESC
        LIMIT 1
    `, {
            bind: [userId]
        });

        return {
            overall: overallStats[0],
            per_jenis: statsByJenis,
            aktivitas_terbaru: aktivitasTerbaru[0] || null
        };
    },

    async findAllWithUser() {
        return await db.query(
            `SELECT tb_olahraga.*, tb_users.name, tb_users.email 
             FROM tb_olahraga 
             JOIN tb_users ON tb_olahraga.user_id = tb_users.id 
             ORDER BY tb_olahraga.tanggal DESC`,
            { type: QueryTypes.SELECT }
        );
    }
};

export default olahragaRepository;

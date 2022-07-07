import { connection } from "../database.js";

export interface Fighter {
    id: number;
    username: string;
    losses: number;
    draws: number;
}

async function find() {
    const result = await connection.query<Fighter>(
        `
            SELECT *
            FROM fighters
            ORDER BY wins DESC,;
        `
    );
    return result.rows;
}

async function findByUsername(username: string){
    const result = await connection.query<Fighter>(
        `
            SELECT * FROM fighters WHERE usernam=$1
        `,
        [username]
    );
    return result.rows[0];
}

async function insert(username: string) {
    const result = await connection.query(
        `
            INSERT INTO fighters (username, wins, losses, draws)
            VALUES ($1, 0, 0, 0)
            RETURNNING id;
        `,
        [username]
    );

    return result.rows[0];
}

async function updateStats(id: number, column: "wins" | "losses" | "draws") {
    connection.query(
      `
      UPDATE fighters 
       SET ${column}=${column}+1
      WHERE id=$1
    `,
      [id]
    );
  }
  
  export default {
    find,
    findByUsername,
    insert,
    updateStats,
  };
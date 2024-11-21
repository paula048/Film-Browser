const config = require('./config'); 


const Pool = require('pg').Pool
const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: 5432,
});

const tmp_path = "socks_shop.sock";
//get all merchants our database
const getMerchants = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(`SELECT * FROM ${tmp_path}`, (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};

const users_path = "socks_shop.users";

const getUsers = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(`SELECT * FROM ${users_path}`, (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          console.log("RES:  "+results);
          resolve(results.rows);
        } else {
          reject(new Error("No results found"));
        }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};





const getFilmList = async () => {
  try {
    return await new Promise(function (resolve, reject) {
      pool.query(`SELECT * FROM film_testy.film`,
      [],
      (error, results) => {
          if (error) {
            reject(error);
          }
          if (results && results.rows) {
            resolve(results.rows);
          } else {
            reject(new Error("No results found"));
          }
      });
    });
  } catch (error_1) {
    console.error(error_1);
    throw new Error("Internal server error");
  }
};



const addUser = (body) => {
  return new Promise(function (resolve, reject) {
    const { id, name, surname, email, password } = body;
    pool.query(
      "INSERT INTO socks_shop.users (name, surname, email, password) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, surname, email, password],
      (error, results) => {
        if (error) {
          reject(error);
        }
        if (results && results.rows) {
          resolve(
            `A new merchant has been added: ${JSON.stringify(results.rows)}`
          );
        } else {
          reject(new Error("No results found"));
        }
      }
    );
  });
};









// //delete a merchant  pierwotna versja
// const deleteMerchant = (id) => {
//   console.log("STEP 1");
//   return new Promise(function (resolve, reject) {
//     pool.query(
//       "DELETE FROM socks_shop.availability WHERE sock_id = $1",
//       [id],
//       (error, results) => {
//         if (error) {
//           reject("DELETE ERROR: "+error);
//         }
//         resolve(`Merchant deleted with sock_id: ${id}`);
//       }
//     );
//   });
// };



// delete a merchant --------------------------------------WORKS
const deleteMerchant = (from, where, id) => {
  console.log("STEP 1");
  return new Promise(function (resolve, reject) {
    const query = `DELETE FROM ${from} WHERE ${where} = $1`;
    pool.query(
      query,
      [id],
      (error, results) => {
        if (error) {
          reject("DELETE ERROR: " + error);
        }
        resolve(`Merchant deleted with sock_id: ${id}`);
      }
    );
  });
};






module.exports = {
  getMerchants,
  deleteMerchant,
  getUsers,
  addUser,
  getFilmList
};
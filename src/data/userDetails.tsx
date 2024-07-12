import { useState, useEffect } from "react"

const url = "https://api.mage-its.id/users/details"

// export interface Details {
//   status: string;
//   message: string;
//   data: Data;
// }

// export interface Data {
//   id: string;
//   openid: string;
//   nama: string;
//   email: string;
//   institusi: string;
//   asal_provinsi: string;
//   alamat: string;
//   image_kartu: string;
//   tanggal_lahir: string;
//   no_hp: string;
// }


const GetData = () => {
  const [user, setUser] = useState<any>({});
  useEffect(()=>{
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
     })
      .catch((err) => {
        console.log(err.message);
      });
  }, [])

  return (
    <>
      {JSON.stringify(user, null, 2)}
    </>
  );
}

export default GetData
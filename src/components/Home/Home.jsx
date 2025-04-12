import { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import styles from "./Home.module.css";

const BASE_URL = 'https://react-prcj24004-default-rtdb.firebaseio.com/'

function Home() {
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })

  useEffect(() => {
    const fetchUser = async () => {
      const userId = localStorage.getItem("userId");
      const url = `${BASE_URL}/users.json?orderBy="$key"&equalTo="${userId}"`;
      const response = await fetch(url);
      const responseData = await response.json();

      setUser({
        first_name: responseData[userId].first_name,
        last_name: responseData[userId].last_name,
        email: responseData[userId].email
      })
    };

    fetchUser();

  }, [])


  return (
    <Card className={styles.home}>
      <h1>¡Bienvenido!</h1>
      <h2>
        { user.first_name } { user.last_name }
      </h2>
    </Card>
  );
}

export default Home;
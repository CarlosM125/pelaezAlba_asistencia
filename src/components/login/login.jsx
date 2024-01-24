import React, { useState } from "react";
import { Form, Button, Checkbox } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Create() {
  let history = useHistory();
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [login, setLogin] = useState([]);

  //console.log("Usuario "+user);
  //console.log("Password "+pass);

  const aux = "https://cors-anywhere.herokuapp.com/";
  const myip = "http://40.75.120.104/apiweb/";

  const sendDataToApi = () => {
    axios
      .get(aux + myip, {
        params: {
          user: user,
          pass: pass,
        },
      })
      .then(function (response) {
        console.log(response);
        setLogin(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {
        history.push("/Tab5");
      });
  };

  login.map((data) => {
    console.log("DATA INFO " + data.record);
    localStorage.setItem("RECORD", data.record);
    localStorage.setItem("ID", data.id);
    localStorage.setItem("NAME", data.names);
    localStorage.setItem("LASTNAME", data.lastnames);
    if (data.record == 0) {
      alert("¡Valide Usuario!");
    }
  });

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Ingresa tu Usuario</label>
          <input
            name="user"
            onChange={(e) => setUser(e.target.value)}
            placeholder="Usuario"
          />
        </Form.Field>
        <Form.Field>
          <label>Ingresa tu contraseña</label>
          <input
            name="pass"
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Clave"
          />
        </Form.Field>
        <center>
          <Button type="submit" color="pink" onClick={sendDataToApi}>
            Siguiente
          </Button>
        </center>
      </Form>
    </div>
  );
}

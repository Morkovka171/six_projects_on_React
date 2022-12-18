import React from "react";
import "./index.scss";
import { Success } from './components/Success';
import { Users } from "./components/users/index";

function Userss() {
  const [users, setUsers] = React.useState([]);
  const [invites, setInvites] = React.useState([]);
  const [isLoading, setLoading] = React.useState(true);
  const [success, setSuccess] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  React.useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.data);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении пользователей");
      })
      .finally(() => setLoading(false));
  }, []);

  // Функция для передачи в стейт searchValue текста из поля поиска
  const onChangeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const onClickInvite = (clickedUserId) => {
    if (invites.includes(clickedUserId)) {
      setInvites(
        (previousInvites) => previousInvites.filter((userId) => userId !== clickedUserId)
      );
    } else {
      setInvites(
        (previousInvites) => [...previousInvites, clickedUserId]
      );
    }
  };

const onClickSendInvites = () => {
  setSuccess(true);
}

  return (
    <div className="App">
      {success ? (
        <Success count={invites.length} />
      ) : (
        <Users
          onChangeSearchValue={onChangeSearchValue}
          searchValue={searchValue}
          items={users}
          isLoading={isLoading}
          invites={invites}
          onClickInvite={onClickInvite}
          onClickSendInvites={onClickSendInvites}
        />
      )}
    </div>
  );
}

export default Userss;

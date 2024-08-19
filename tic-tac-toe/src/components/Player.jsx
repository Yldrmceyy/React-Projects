import { useState } from "react";

export default function Player({ name, symbol }) {
  // 1. Durum değişkeni ve güncelleme fonksiyonunu tanımlıyoruz
  const [isEditing, setIsEditing] = useState(false);

  // 2. Butona tıklandığında durumu güncelleyen fonksiyon
  const handleEditClick = () => {
    setIsEditing(isEditing ? false : true);
  };

  let playerName = <span className="player-name">{name}</span>;
  //let btnCaption = "Edit";

  if (isEditing) {
    playerName = <input type="text" required value={name} />;
    //btnCaption = "Save";
  }
  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

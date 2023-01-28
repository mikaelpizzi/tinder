import { useState } from "react";
import TinderCard from "react-tinder-card";
import ChatContainer from "../components/ChatContainer";

const Dashboard = () => {
  const db = [
    {
      name: "Richard Hendricks",
      url: "https://media.istockphoto.com/id/1313939390/es/foto/joven-adulto-feliz-mujer-asi%C3%A1tica-usar-anteojos-usando-el-tel%C3%A9fono-m%C3%B3vil-para-la-aplicaci%C3%B3n-de.jpg?s=1024x1024&w=is&k=20&c=a37GNX4n5CwRJhpBqbIf2jbTA-qqIRfBrIbqMy4rfqA=",
    },
    {
      name: "Erlich Bachman",
      url: "https://media.istockphoto.com/id/1313939390/es/foto/joven-adulto-feliz-mujer-asi%C3%A1tica-usar-anteojos-usando-el-tel%C3%A9fono-m%C3%B3vil-para-la-aplicaci%C3%B3n-de.jpg?s=1024x1024&w=is&k=20&c=a37GNX4n5CwRJhpBqbIf2jbTA-qqIRfBrIbqMy4rfqA=",
    },
    {
      name: "Monica Hall",
      url: "https://media.istockphoto.com/id/1313939390/es/foto/joven-adulto-feliz-mujer-asi%C3%A1tica-usar-anteojos-usando-el-tel%C3%A9fono-m%C3%B3vil-para-la-aplicaci%C3%B3n-de.jpg?s=1024x1024&w=is&k=20&c=a37GNX4n5CwRJhpBqbIf2jbTA-qqIRfBrIbqMy4rfqA=",
    },
    {
      name: "Jared Dunn",
      url: "https://media.istockphoto.com/id/1313939390/es/foto/joven-adulto-feliz-mujer-asi%C3%A1tica-usar-anteojos-usando-el-tel%C3%A9fono-m%C3%B3vil-para-la-aplicaci%C3%B3n-de.jpg?s=1024x1024&w=is&k=20&c=a37GNX4n5CwRJhpBqbIf2jbTA-qqIRfBrIbqMy4rfqA=",
    },
    {
      name: "Dinesh Chugtai",
      url: "https://media.istockphoto.com/id/1313939390/es/foto/joven-adulto-feliz-mujer-asi%C3%A1tica-usar-anteojos-usando-el-tel%C3%A9fono-m%C3%B3vil-para-la-aplicaci%C3%B3n-de.jpg?s=1024x1024&w=is&k=20&c=a37GNX4n5CwRJhpBqbIf2jbTA-qqIRfBrIbqMy4rfqA=",
    },
  ];

  const characters = db;
  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      {/* <ChatContainer /> */}
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}

          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

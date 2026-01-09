import React from "react";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="parents" >
        <Card user="aman" age={18}   img='https://media.istockphoto.com/id/174543851/photo/christmas-baby-portrait-series.jpg?s=612x612&w=0&k=20&c=ElFivN4ztsPihsHbpkHoTUWthId-tmTKyNgmzU_6dAA=' />
       <Card user="sarthak" age={28} img='https://media.istockphoto.com/id/468906855/photo/enjoying-the-fresh-sea-air.jpg?s=612x612&w=0&k=20&c=-QGjYcFqz0Kabn-J6vxngTYQHP1MmlVzkiZmRyev3mA=' />
       <Card user="kaniya" age={19}  img='https://media.istockphoto.com/id/2195235640/photo/woman-with-glowing-skin-enjoying-a-peaceful-breeze-in-a-serene-natural-setting.jpg?s=612x612&w=0&k=20&c=bI5ASqdl2kAmvBvGxQdXwiV8jutBdKSKamgG96J2nNM='  />
       <Card user="pooja" age={21}   img='https://media.istockphoto.com/id/1399395748/photo/cheerful-business-woman-with-glasses-posing-with-her-hands-under-her-face-showing-her-smile.jpg?s=612x612&w=0&k=20&c=EbnuxLE-RJP9a08h2zjfgKUSFqmjGubk0p6zwJHnbrI=' />
       <Card user="kannu" age={98}   img='https://media.istockphoto.com/id/1321401638/photo/happy-girl-in-trendy-glasses-looking-up.jpg?s=612x612&w=0&k=20&c=KUP9FxX6j0BuZOPsttzcgAoFAhQtQM3PXb9dpX_NhXI=' />
    </div>
  );
};

export default App;


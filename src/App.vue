<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500&display=swap" rel="stylesheet">
  
  <div class="header">
      <!-- <router-link to="/">Криптография</router-link> -->
      <h1 class="navbar_img">Al-Kindi</h1>
      <ul>
        <li class="header_li"><router-link to="/" class="header_li">Криптография</router-link></li>
        <li class="header_li"><router-link to="/simmetrical" class="header_li">Симметричное</router-link></li>
        <li class="header_li"><router-link to="/asimmetrical" class="header_li">Ассиметричное </router-link></li>
        <li class="header_li"><router-link to="/authors" class="header_li">Авторы</router-link></li>
      </ul>
    </div>
  
  <router-view class="helper"/>
</template>

<style>
.navMenu {
  position: absolute;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.header a {
  color: black;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  display: inline-block;
  width: 80px;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.header a:hover {
  color: #fddb3a;
}

.header .dot {
  width: 6px;
  height: 6px;
  background: #fddb3a;
  border-radius: 50%;
  opacity: 0;
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

.header a:nth-child(1):hover ~ .dot {
  -webkit-transform: translateX(30px);
  transform: translateX(30px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.header a:nth-child(2):hover ~ .dot {
  -webkit-transform: translateX(110px);
  transform: translateX(110px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.header a:nth-child(3):hover ~ .dot {
  -webkit-transform: translateX(200px);
  transform: translateX(200px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}

.header a:nth-child(4):hover ~ .dot {
  -webkit-transform: translateX(285px);
  transform: translateX(285px);
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  opacity: 1;
}







*{
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
}
.helper{
margin-top: 80px;
}

.navbar_img{
  height: 60px;
  margin-left: 40px;
  margin-top: 40px;
}

.header {
    font-family:Helvetica, sans-serif;
    background-color: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    display: flex;
    align-items: center;
    box-shadow: 0 0 25px 0 black;
}

.header_li {
    margin: 20px;
    color:black;
}

ul {
  list-style-type: none;
  padding: 0;
  margin-top: 20px;
}
li {
  display: inline-block;
  padding: 30px;
}
</style>

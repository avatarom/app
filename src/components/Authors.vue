<template>
    <div class="hello">
      <h1>Авторы</h1>
        <p>Этот сервис - курсовой проект студентов Политехнического колледжа г.Астана</p>
        <p>Дизайн и вёрстка сайта - <a href="https://www.instagram.com/_badempress_/">@_badempress_</a></p>
        <p>Реализация алгоритмов и логика сайта - <a href="https://www.instagram.com/ave.ton/">@ave.ton</a></p>
        <p>Справочный и теоритический материал - пары по предмету "Методы Защиты Информации" преподаватель - Стасишина Татьяна Григорьевна</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Authors',
    props: {
    }
  }
  </script>
  
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.block{
  margin-top: 20px;
}
.block_name{
  font-size: 50px;
}
.block_paragraph{
  font-weight: 300;
  font-size: 20px;
  margin-top: 20px;
}


.hello{
  padding-left: 20px;
  padding-right: 20px;
 /* padding-top: 30px; */
}

p{
  font-size: 25px;
}

h1{
  font-size: 80px;
  margin-top: 120px;
  margin-bottom: 0px;
}

li{
  padding: 10px;
}
</style>

  
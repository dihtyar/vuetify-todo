<template>
  <div class="home">

      <h1>Home page</h1>
      <v-btn class="pink white--text">Click me</v-btn>
      <v-btn color="green" depressed>Click me</v-btn>
      <v-btn color="yellow" flat>Click me</v-btn>
      <v-btn flat color="pink" >Click me</v-btn>

      <v-btn depressed class="blue white--text">
        <v-icon left>email</v-icon>
        <span>Email me</span>
      </v-btn>

      <v-btn depressed small class="blue white--text">
        <v-icon left small>email</v-icon>
        <span>Email me</span>
      </v-btn>

      <v-btn depressed large class="blue white--text">
        <span>Email me</span>
        <v-icon right large>email</v-icon>
      </v-btn>

      <v-btn fab depressed small dark color="purple">
        <v-icon>favorite</v-icon>
      </v-btn>
      
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  }
}
</script>

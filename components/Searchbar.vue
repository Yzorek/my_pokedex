<template>
  <div class="input-group">
    <div class="custom-file">
      <input v-model="inputValue" type="text" class="form-control" placeholder="ID" aria-label="ID" aria-describedby="basic-addon1">
    </div>
    <div class="input-group-append">
      <button @click="$emit('inputChanged', inputValue)" class="btn btn-outline-secondary" type="button">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      inputValue: ''
    }
  }
}
</script>
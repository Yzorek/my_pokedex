<template>
  <div class="input-group">
    <div class="custom-file">
      <input type="text" @input="$emit('inputChanged', $event.target.value)" class="form-control" placeholder="Search by name..." aria-label="Search by name..." aria-describedby="basic-addon1">
    </div>
  </div>
</template>

<script>
</script>
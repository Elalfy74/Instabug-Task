<template>
  <div class="input">
    <label for="email">Work Email</label>
    <input
      type="text"
      name="email"
      placeholder="your@company.com"
      :v-modal="ref"
    />
  </div>
</template>

<script>
export default {
  props: ["ref"],
};
</script>

<style lang="scss" scoped>
.input {
  width: 100%;
  label,
  input {
    display: block;
    width: 100%;
  }
  label {
    margin-bottom: 10px;
  }
  input {
    padding: 10px 15px;
    margin-bottom: 20px;
    border: 1px solid #ddd;
    border-radius: 4px;
    outline: none;
    font-size: 16px;
    font-weight: 400;
    &:focus {
      border: 1px solid rgb(64, 170, 170);
    }
  }
}
</style>

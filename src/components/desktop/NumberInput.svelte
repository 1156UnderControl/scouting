<script>
  export let value = 0;
  export let min = 0;
  export let max = Number.MAX_SAFE_INTEGER;
</script>


<input type="number" min={min} max={max} bind:value class="num-input"/>

<style>
  .num-input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #0061a6;
  border-radius: 4px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.2s ease-in-out;
  width: 20vh;
  padding: 10px;
}

  .num-input:focus {
    outline: none;
    border-color: #0061a6;
    box-shadow: 0 0 5px rgba(51, 102, 204, 0.8);
  }

</style>

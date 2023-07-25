<script>
  export let value = 0;
  export let min = 0;
  export let max = Number.MAX_SAFE_INTEGER;
  function handleIncrease() {
    if(value < max) 
      value++;   
  }
  function handleDecrease() {
    if(value > min)
      value--;
  }
</script>

<section class="all">
  <button on:click={handleIncrease} class="btn">&#8679;</button>
  <p>{value}</p>
  <button on:click={handleDecrease} class="btn">&#8681;</button>
</section>

<style>
  * {
    box-sizing: border-box;
    font-family: Arial;
    font-size: 20px;
  }

  .btn {
    background-color: #0061a6;
    color: white;
    border-radius: 8px;
    padding: 10px 20px 10px 20px;
    text-align: center;
    transition: background-color 0.3s ease;
  }

  .btn:hover {
    background-color: #003b6e;
  }

  .all {
    text-align: center;
  }

  .number {
    font-size: 60px;
    animation: numberChange 0.5s cubic-bezier(0.68, -0.6, 0.32, 1.6);
  }

  @keyframes numberChange {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    50% {
      opacity: 1;
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      transform: scale();
    }
  }
</style>

<script>
  export let selected = null;
  export let items = [];
</script>

<select>
  {#each item in items}
    <option id={item.id}>{item.text}</option>
  {/each}
</select>


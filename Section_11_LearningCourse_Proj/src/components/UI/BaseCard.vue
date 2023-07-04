<template>
    <li>
        <div>
            <header>
                <h3>{{ resourceTitle }}</h3>
                <base-button mode="flat"></base-button>
            </header>
            <p>{{ resourceDescription }}</p>
            <nav>
                <a :href="resourceLink">View Resource</a>
            </nav>
        </div>
    </li>
</template>

<script>

export default {
  props: ['resourceTitle', 'resourceDescription', 'resourceLink'],
};
</script>



<style scoped>
div{
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 2rem auto;
    max-width: 40rem;
}

li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>
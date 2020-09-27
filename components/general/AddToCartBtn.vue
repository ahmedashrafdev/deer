<template>
  <a class="add-to-cart-btn">
    <div class="icon"><cart-icon /></div>
    <em>{{ $t('addtocart') }}</em>
  </a>
</template>

<script>
import CartIcon from '@/assets/icons/add-to-cart.svg?inline'
export default {
  name: 'AddToCartBtn',

  components: {
    CartIcon,
  },
}
</script>

<style>
.add-to-cart-btn {
  background: #fff;
  position: relative;
  padding: 0 25px;
  border: 1px solid var(--grey-border);
  text-align: center;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s linear;
}
.add-to-cart-btn.active {
  background-color: var(--primary);
}
.add-to-cart-btn.active em {
  color: #fff;
}
.add-to-cart-btn.active svg {
  fill: #fff;
}

.add-to-cart-btn:hover {
  background-color: var(--primary);
}

.add-to-cart-btn:hover em {
  color: #fff;
}

.add-to-cart-btn:hover svg {
  fill: #fff;
}

.icon {
  width: 30px;
  margin-left: 5px;
  height: 30px;
}
.icon svg {
  width: 100%;
  height: 100%;
  transition: fill 0.2s linear;
}

.add-to-cart-btn em {
  line-height: 38px;
  font-size: 12px;
  transition: color 0.2s linear;
}
</style>

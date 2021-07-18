<template>
  <div class="modal">
    <a href="" class="close" @click.prevent="handleClose">&times;</a>
    <p>
      maps.codefor.berlin ist ein Projekt des <a href="https://codefor.de/berlin">OK Lab Berlins</a>.
    </p>
    <p>
      Den Source-Code gibt es auf <a href="https://github.com/codeforberlin/maps.codefor.berlin">GitHub</a>.
    </p>
    <p>
      Die aktuelle Karte zeigt <span v-html="map.options.attribution"></span>. Hinter dem Link gibt es mehr Informationen.
    </p>
    <p>
      Um die Karte in einem eigenen Projekt zu verwenden können folgende Metadaten genutzt werden:
    </p>
    <pre>{{ map }}</pre>
    <p>
      Für einen Produktionsbetrieb müsste die Karte aber selber gehosted werden.
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    props: {
      map: Object,
      onClose: Function
    },
    methods: {
      handleClose: function() {
        this.$emit('onClose')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .modal {
    position: absolute;
    top: 20%;
    right: 20%;
    left: 20%;
    z-index: 2000;

    background-color: #f2f2f2;
    box-shadow: 0px 0px 10px silver;

    padding: 10px 20px 20px 20px;

    a {
      text-decoration: none;
    }

    pre {
      background-color: #333;
      color: white;

      white-space: pre-wrap;
      word-wrap: break-word;

      margin: 0;
      padding: 10px;
      border-radius: 4px;
    }

    .close {
      float: right;
    }

    :last-child {
      margin-bottom: 0;
    }
  }
</style>

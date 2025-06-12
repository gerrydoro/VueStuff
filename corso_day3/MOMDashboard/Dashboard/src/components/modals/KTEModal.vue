<script setup lang="ts">
import { ref } from 'vue';

</script>

<template>
  <div class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="modalheader">
            <h5 class="modal-title">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="modalbody">
            <p>Modal body text goes here.</p>
          </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

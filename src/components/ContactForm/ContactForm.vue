<script setup>
import { reactive, ref } from "vue";
import postMessage from "../../dataloaders/contact.js";

const formData = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const messageSent = ref(false);
const messageError = ref(false);

const validateFormData = ({ name, email, subject, message }) =>
  !(!name || !email || !subject || !message);

const resetForm = () => {
  (formData.name = ""),
    (formData.email = ""),
    (formData.subject = ""),
    (formData.message = "");
};

const submitForm = async () => {
  if (!validateFormData(formData)) {
    messageError.value = true;
    resetForm();
    return;
  }

  const sendMessage = await postMessage(formData);

  if (sendMessage.error) {
    messageError.value = true;
    resetForm();
    return;
  }

  resetForm();
  messageSent.value = true;
  setTimeout(() => {
    messageSent.value = false;
  }, 6000);
};
</script>

<template>
  <form @submit.prevent="submitForm" class="contact-form">
    <div class="form-input">
      <input
        v-model="formData.name"
        type="text"
        placeholder="John Doe"
        :class="{ complete: formData.name }"
      />
      <label>Name</label>
    </div>
    <div class="form-input">
      <input
        v-model="formData.email"
        type="email"
        placeholder="john.doe@example.com"
        :class="{ complete: formData.email }"
      />
      <label>Email</label>
    </div>
    <div class="form-input">
      <input
        v-model="formData.subject"
        type="text"
        placeholder="Subject"
        :class="{ complete: formData.subject }"
      />
      <label>Subject</label>
    </div>
    <div class="form-input">
      <textarea
        v-model="formData.message"
        placeholder="Brief description of the services you are looking for..."
        :class="{ complete: formData.message }"
      ></textarea>
      <label>Message</label>
    </div>
    <div class="button-row">
      <transition name="fade">
        <div v-if="messageSent" class="success">Message sent successfully!</div>
      </transition>
      <transition name="fade">
        <div v-if="messageError" class="error">
          Message not delivered. Please try again
        </div>
      </transition>
      <button :disabled="!validateFormData(formData)" type="submit">
        Send
      </button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
@import "@/assets/stylesheets/variables.scss";

.contact-form {
  flex: 1;

  .form-input {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: $margin;

    label {
      display: block;
      font-size: $font-size-xs;
      margin-bottom: $margin-xs;
      font-weight: $font-bold;
      color: $quaternary;
    }

    textarea + label {
      margin-bottom: $margin-sm;
    }

    input,
    textarea {
      background: transparent;
      border: none;
      border-bottom: 1px solid $border-color;
      outline: none;
      color: $primary;
      padding: $padding-xs $padding-sm;
      resize: none;
      font-size: $font-size-sm;
    }

    textarea {
      font-family: inherit;
      min-height: 200px;
      border: 1px solid $border-color;
    }

    ::placeholder {
      color: $tertiary;
    }

    input:focus,
    textarea:focus,
    input:hover,
    textarea:hover {
      border-color: $secondary;
    }

    input.complete + label,
    textarea.complete + label {
      color: $secondary;
    }
  }

  .button-row {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    .success {
      color: $secondary;
      font-size: $font-size-sm;
      font-weight: $font-bold;
      margin-right: $margin;
    }

    .error {
      color: $error;
      font-size: $font-size-sm;
      font-weight: $font-bold;
      margin-right: $margin;
    }

    .fade-enter-active,
    .fade-leave-active {
      transition: opacity 1s;
    }
    .fade-enter,
    .fade-leave-to {
      opacity: 0;
    }
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    color: $secondary;
    background: transparent;
    font-size: $font-size-sm;
    padding: 0 $padding;
    height: 32px;
    border: 1px solid $secondary;
    opacity: 0.7;
    font-weight: $font-medium;

    &:hover {
      opacity: 1;
      cursor: pointer;
      background: $button-secondary-bg-hover;
    }

    &:disabled {
      opacity: 1;
      color: $tertiary;
      border-color: $tertiary;
      background: transparent;
      cursor: not-allowed;
    }
  }
}
</style>

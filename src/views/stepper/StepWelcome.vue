<template>
  <div class="wizard-step-wrapper">
    <div class="wizard-icon-wrapper">
      <IconPresenter name="step_welcome" />
    </div>
    <article class="wizard-content-wrapper pr-4">
      <h1>{{ $t('wizard.step_content.welcome_header') }}</h1>
      <p class="my-5">
        {{ $t('wizard.step_content.intro_text') }}
      </p>
      <ol>
        <li>
          <h2>{{ $t('wizard.step_content.step_one_header') }}</h2>
          <p class="px-5">{{ $t('wizard.step_content.step_one_info') }}</p>
        </li>
        <li>
          <h2>{{ $t('wizard.step_content.step_two_header') }}</h2>
          <p class="px-5">{{ $t('wizard.step_content.step_two_info') }}</p>
        </li>
        <li>
          <h2>{{ $t('wizard.step_content.step_three_header') }}</h2>
          <p class="px-5">{{ $t('wizard.step_content.step_three_info') }}</p>
        </li>
      </ol>
    </article>
  </div>
</template>

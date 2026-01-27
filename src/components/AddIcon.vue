<script setup lang="ts">
import Dialog from '@/components/Dialog.vue'
import { nanoid } from 'nanoid/non-secure'
import { addLayout, updateLayout, editWidget } from '@/store'
import { toast } from 'vue-sonner'

const emit = defineEmits(['update:modelValue'])

// 保存更改
async function handleAdd() {
  try {
    if (editWidget.value.id) {
      // 更新现有图标
      updateLayout(editWidget.value)
      toast.success('修改成功')
    } else {
      // 添加新图标
      editWidget.value.id = nanoid()
      addLayout(editWidget.value)
      toast.success('添加成功')
    }
    closed()
  } catch (e) {
    console.error('保存图标失败:', e)
    toast.error('保存失败')
  }
}

// 重置表单
function resetForm() {
  editWidget.value = {
    id: '',
    icon: '',
    name: '',
    url: '',
  }
}

// 关闭对话框
function closed() {
  emit('update:modelValue', false)
  resetForm()
}
</script>

<template>
  <Dialog>
    <div class="mx-10 flex h-150 w-162 flex-col overflow-hidden rounded-xl bg-white shadow-xl">
      <div class="flex-1">
        <div class="flex h-14 items-center justify-between pr-2 pl-6">
          <h3 class="text-lg leading-6 font-medium text-gray-900">添加图标</h3>
          <Icon
            class="h-8 cursor-pointer rounded px-3 text-lg text-gray-600 transition hover:bg-gray-100"
            icon="tabler:x"
            @click="$emit('update:modelValue', false)"
          />
        </div>
        <div class="flex flex-col gap-5 overflow-hidden px-6">
          <div class="flex flex-col">
            <label for="url" class="mb-2 block text-sm font-medium">网址</label>
            <input
              type="text"
              id="url"
              v-model="editWidget.url"
              placeholder="请输入网址"
              class="rounded-lg border border-white bg-gray-100 px-4 py-2 text-sm outline-none"
            />
          </div>

          <div class="flex flex-col">
            <label for="name" class="mb-2 block text-sm font-medium">标题</label>
            <input
              type="text"
              id="name"
              v-model="editWidget.name"
              placeholder="请输入标题"
              class="rounded-lg border border-white bg-gray-100 px-4 py-2 text-sm outline-none"
            />
          </div>

          <div class="flex flex-col">
            <label for="icon" class="mb-2 block text-sm font-medium">图标地址</label>
            <input
              type="text"
              id="icon"
              v-model="editWidget.icon"
              placeholder="请输入图标地址"
              class="rounded-lg border border-white bg-gray-100 px-4 py-2 text-sm outline-none"
            />
          </div>
        </div>
      </div>

      <div class="flex items-center gap-4 px-8 pb-6">
        <div class="flex-1"></div>
        <button
          class="h-8 cursor-pointer rounded-md border border-[#d9d9d9] px-3.75 text-sm select-none"
          @click="$emit('update:modelValue', false)"
        >
          关 闭
        </button>
        <button
          class="h-8 cursor-pointer rounded-md border border-primary bg-primary px-3.75 text-sm text-white select-none"
          @click="handleAdd"
        >
          确 定
        </button>
      </div>
    </div>
  </Dialog>
</template>

<template>
    <NuxtLayout name="custom">
        <div class="manage">
            <div class="manage-between">
                <div class="manage-head">註冊碼管理</div>
                <div class="manage-row">
                    <div class="manage-num">項目數量：10</div>
                    <div @click="isShowAdd = true" class="manage-create">+ 新增註冊碼</div>
                </div>
                
            </div>

            <div class="Mtable">
                <el-table
                    :data="dataAll"
                    style="width: 100%"
                >
                    <el-table-column
                    prop="code"
                    label="註冊碼"
                    sortable
                    min-width="12"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="account"
                    label="綁定使用者帳號"
                    sortable
                    min-width="12"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="name"
                    label="使用者名稱"
                    sortable
                    min-width="12"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="way"
                    label="生成方式"
                    sortable
                    min-width="12"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="usedTime"
                    label="使用時間"
                    sortable
                    min-width="12"
                    >
                    </el-table-column>
                    <el-table-column
                    prop="createTime"
                    label="產生時間"
                    sortable
                    min-width="12"
                    >
                    </el-table-column>
                    <el-table-column
                    label="操作"
                    sortable
                    min-width="12"
                    >
                    <template #default="scope">
                        <div class="Mtable-row">
                            <div class="Mtable-icon-outer">
                                <img @click.stop="deleteUser(scope.row)" class="Mtable-icon" src="@/assets/images/Icon/delete.svg" alt="close">
                            </div>
                        </div>
                    </template>
                    </el-table-column>
                </el-table>
            </div>

            <!-- 新增資料 -->
            <div v-if="isShowAdd" class="popup">
                <div @click="isShowAdd = false" class="box">
                    <div @click.stop class="block-box">
                        <div class="title">新增註冊碼</div>
                        <div class="item-title">註冊碼數量</div>
                        <div><input class="input" placeholder="請輸入數量" type="text"></div>
                        <div class="btn-green">儲存</div>
                    </div>
                </div>
            </div>


            <!-- 刪除資料 -->
            <div v-if="isShowDelete" class="popup">
                <div @click="isShowDelete = false" class="box">
                    <div @click.stop class="block-box">
                        <div class="title">刪除提醒</div>
                        <div class="box-hint">註冊碼刪除後將無法復原，您確認要刪除？</div>
                        <div class="box-row">
                            <div @click="isShowDelete = false" class="box-cancel">取消</div>
                            <div @click="deleteCurrentData" class="box-delete">刪除</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </NuxtLayout>
</template>

<script setup>

const dataAll = reactive([
  { code: 'awasd', account: 'user1@gmail.com', name: 'frank', way: '管理者建立', usedTime: '2023/03/01 12:22:22', createTime: '2023/03/01 12:22:22' },
  { code: 'asdfadsf', account: 'user2@gmail.com', name: 'frank', way: '管理者建立', usedTime: '2023/03/01 12:22:22', createTime: '2023/03/01 12:22:22' },
  { code: 'sgg', account: 'user3@gmail.com', name: 'frank', way: '管理者建立', usedTime: '2023/03/01 12:22:22', createTime: '2023/03/01 12:22:22' },
  { code: 'jfh', account: 'user4@gmail.com', name: 'frank', way: '管理者建立', usedTime: '2023/03/01 12:22:22', createTime: '2023/03/01 12:22:22' },
  { code: 'jdfhd', account: 'user5@gmail.com', name: 'frank', way: '管理者建立', usedTime: '2023/03/01 12:22:22', createTime: '2023/03/01 12:22:22' },
  { code: 'rwerer', account: 'user6@gmail.com', name: 'frank', way: '管理者建立', usedTime: '2023/03/01 12:22:22', createTime: '2023/03/01 12:22:22' },
  { code: 'asdfadfa', account: 'user7@gmail.com', name: 'frank', way: '管理者建立', usedTime: '2023/03/01 12:22:22', createTime: '2023/03/01 12:22:22' },
])

const isShowAdd = ref(false)
const isShowDelete = ref(false)

const addData = ref({})
const deleteData = ref({})

function addUser(row) {
    isShowAdd.value = true
}

function deleteUser(row) {
    isShowDelete.value = true
    deleteData.value = row
}

function deleteCurrentData() {
    isShowDelete.value = false
}

</script>

<style lang="scss" scoped>
@import '~/assets/styles/popup.scss';
@import '~/assets/styles/form.scss';
@import '~/assets/styles/manage.scss';
@import '~/assets/styles/table.scss';

.box {
}
</style>
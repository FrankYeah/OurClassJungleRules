<template>
    <NuxtLayout name="custom">
        <div class="manage">
            <div class="manage-between">
                <div class="manage-head">註冊碼管理</div>
                <div class="manage-row">
                    <!-- <div class="manage-num">項目數量：10</div> -->
                    <div @click="isShowAdd = true" class="manage-create">+ 新增註冊碼</div>
                </div>

            </div>

            <div class="Mtable">
                <el-table :data="allData" style="width: 100%" empty-text="暫無數據">
                    <el-table-column prop="licenseKey" label="註冊碼" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="customerEmail" label="綁定使用者帳號" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="customerName" label="使用者名稱" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="generate" label="生成方式" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="activationDate" label="啟用時間" sortable min-width="160">
                    </el-table-column>
                    <el-table-column prop="createDate" label="產生時間" sortable min-width="160">
                    </el-table-column>
                    <el-table-column label="操作" sortable min-width="260">
                        <template #default="scope">
                            <div class="Mtable-row">
                                <div class="Mtable-icon-outer" @click="deleteUser(scope.row)" @mouseover="setHoverImg(scope.row.id,'delete','mouseover')"
                                    @mouseleave="setHoverImg(scope.row.id,'delete','mouseleave')">
                                    <img v-if="scope.row.isDeleteHove" class="Mtable-icon"
                                        src="@/assets/images/Icon/delete_hover.svg" alt="close">
                                    <img v-else class="Mtable-icon" src="@/assets/images/Icon/delete.svg" alt="close">
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
                        <div><input type="number" min="1" v-model="addCodeCount" class="input" placeholder="請輸入數量"></div>
                        <div @click="hendelAdd" class="btn-green">新增</div>
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
import { getAll, edit, add } from "~/api/license"
import { ElMessage } from 'element-plus'

const addCodeCount = ref(1)
const hendelAdd = async () => {
    const formData = new FormData();
    formData.append('count', addCodeCount.value)
    let addData = await add(formData)
    ElMessage({
        message: '新增成功',
        type: 'success',
    })
    await init()
    isShowAdd.value = false
    addCodeCount.value = 1
    console.log("addData", addData)
}

const allData = reactive([])
async function init() {
    allData.length = 0
    const { data } = await getAll()
    let list = data.value.data.list
    list.map((o,index) => {
        o.id = index
        o.isDeleteHove= false
    })
    list = list.filter(o => o.activated !== 2)
    allData.push(...list)
}

const setHoverImg = (tableId, type, mouse) => {
    let item = allData.filter(o => o.id == tableId)[0]
    if (type == 'edit') {
        item.isEditHove = mouse == 'mouseover'
    } else if (type == 'delete') {
        item.isDeleteHove = mouse == 'mouseover'
    }
}


const isShowAdd = ref(false)
const isShowDelete = ref(false)

const current = {}

function deleteUser(id) {
    isShowDelete.value = true
    let filter = allData.filter(o => o.id == id)[0]
    Object.assign(current, filter)
}

function deleteCurrentData() {
    isShowDelete.value = false
    current.activated = 2
    edit(current.id, current).catch(() => {
        ElMessage.error('刪除失敗')
    }).then(() => {
        ElMessage({
            message: '刪除成功',
            type: 'success',
        })
        init()
    })
}
nextTick(() => {
    init()
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/popup.scss';
@import '~/assets/styles/form.scss';
@import '~/assets/styles/manage.scss';
@import '~/assets/styles/table.scss';

.box {}
</style>
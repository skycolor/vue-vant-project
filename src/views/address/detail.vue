<template>
    <van-address-edit
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
      />
</template>

<script>
import { AddressEdit } from 'vant';
export default {
    data() {
        return {
          searchResult: [],
        };
    },
    components: {
        [AddressEdit.name]: AddressEdit
    },
    methods: {
        onSave() {
            this.toast('save');
        },
        onDelete() {
            this.toast('delete');
        },
        onChangeDetail(val) {
            if (val) {
                this.searchResult = [
                    {
                        name: '黄龙万科中心',
                        address: '杭州市西湖区',
                    },
                ];
            } else {
                this.searchResult = [];
            }
        },
    },
}
</script>
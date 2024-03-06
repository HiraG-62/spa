<template>
	<div class="manage_labs">
		<select name="labs" id="">
			<div v-for="(lab, index) of labs" :key="index">
				<option value={{ lab }}></option>
			</div>
		</select>
		<label @click="openPop" class="popup_opne">研究室管理</label>
		<div v-show="visPop" class="popup_overlay">
			<div class="popup_window">
				<div class="manage_labs_form">
					<input type="radio" name="addOrRemove" value="追加" id="radio_add" checked />
					<label for="radio_add">追加</label>
					<input type="radio" name="addOrRemove" value="削除" id="radio_remove" />
					<label for="radio_remove">削除</label>
					<div class="add_lab">
						<form action="/manage/assignlabs" method="post">
							<label>研究室名</label>
							<input required type="text" name="labs_name" />
							<br>
							<input type="submit" name="addLab" value="追加" class="redButton" />
						</form>
					</div>
					<div class="remove_lab">
						<form action="/manage/assignlabs" method="post">
							<div class="labs_list">

								<div>
									<input type="checkbox" id="labCheck<%= index %>" name="lab_check"
										value="<%= lab.name %>">
									<label for="labCheck<%= index %>">
									</label>
								</div>
							</div>
							<button type="submit" name="removeLab" value="削除" class="redButton" />
						</form>
					</div>
				</div>
				<label @click="closePop" class="popup_close" for="popup">
					<svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
						<line x1="0" y1="0" x2="18" y2="18" stroke="white" stroke-width="3"></line>
						<line x1="0" y1="18" x2="18" y2="0" stroke="white" stroke-width="3"></line>
					</svg>
				</label> 
			</div>
		</div>
		<div class="account_list">
			<div></div>
		</div>
	</div>
	
</template>

<script>
import Methods from '@/api/methods'

export default {
    name: 'assignlab',
    data() {
        return {
			labs: null,
			visPop: false
        }
    },
    async mounted() {
		let res = await Methods.sendReq('/managelabs')
		this.labs = res.data.labs
		console.log(res)
    },
    methods: {
		openPop() {
			this.visPop = true
		},
		closePop() {
			this.visPop = false
		}	
    }
}

</script>
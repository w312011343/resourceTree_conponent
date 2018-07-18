Tree.prototype = {
	createTree:function($container){
		var data = this.data;
		this.createIterator(data,$container,0);
		
	},
	createIterator:function(data,$container,index){
		var self = this;
		if (data && data.length) {
			for(var i = 0;i<data.length;i++){
				var val = data[i];
				var $item = $(`
				<div class="treeItem" level_index = "${index}">
						<div class='itemTitle'>
							<div class="itemControl itemShow itemIcon"></div>
							<input class='itemCheck hide itemIcon' type="checkbox"/>
							<div class="itemLevelTitle"></div>
						</div>
						<div class="treeLevlCont hide"></div>
					</div>
				`);
				var $treeLevelTitle = $item.find('.itemLevelTitle');
				var $treeLevlCont = $item.find('.treeLevlCont');
				var $itemCheck = $item.find('.itemCheck');
				var $itemControl = $item.find('.itemControl');
				$item.appendTo($container);
				$treeLevelTitle.text(val.title);
				if (val.datas&& val.datas.length) {
					var flag = index+1;
					self.createIterator(val.datas,$treeLevlCont,flag)
				}else{
					$itemCheck.removeClass('hide');
					$itemControl.addClass('hide');
				}
			}

				
		}
	
	}
}
function Tree(data){
	this.data = data;
}


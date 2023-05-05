
let list =[]
$('#submit-order').click(()=>{
	$('.result').show()
	list.length = 0
	$('tr').each((i,e)=>{
		if(i>0&&i<$('tr').length){
			// if()
			$(e).children().each((i,item)=>{
				// console.log(item,'item');
				if($(item).find('input').val()){
					list.push({
						'name':$(item).prev().html(),
						'price':$(item).next().html(),
						'amount':$(item).find('input').val()
					})
					// console.log('is',$(item).find('input').val());
				}
			})
			// console.log($(e).children());
		}
	})
	console.log(list);
	let total = 0
	for(let item of list) {
		// console.log(item,'item');
		$('.result_table').append(`<tr><td>${item.name}</td><td>${item.amount}</td>
		<td>${item.price}</td><td>${ (parseFloat(item.price.replace('$','')) * item.amount).toFixed(2)}</td></tr>`)
		total += (item.price.replace('$','')) * item.amount
	}
	$('.total span').html(total.toFixed(2))
	
})

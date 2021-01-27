const select = `
<div class="">
    <select>
        <option value="">Select your search</option>
        <option>Users</option>
        <option>Channels</option>
    </select>
</div>`

$('#SearchDropdown').prepend(select)

$(document).on('change', 'select', function() {
    const selectOption = $(this).val()
    if (selectOption == "Users"){
        $('input').val('u/')
    }

    if (selectOption == "Channels"){
        $('input').val('r/')
    }
    
});

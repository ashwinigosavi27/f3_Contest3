
function save_row(no)
{
 var name_val=document.getElementById("name_text"+no).value;
 var student_roll=document.getElementById("roll_text"+no).value;
 var subject=document.getElementById("subject_text"+no).value;
 var marks=document.getElementById("marks_text"+no).value;
 var marked_by=document.getElementById("markedBy_text"+no).value;
 

 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("roll_row"+no).innerHTML=student_roll;
 document.getElementById("subject_row"+no).innerHTML=subject;
 document.getElementById("marks_row"+no).innerHTML=marks;
 document.getElementById("markedBy_row"+no).innerHTML=marked_by;
 

 
 document.getElementById("save_button"+no).style.display="none";
}


function add_row()
{
 var name_val=document.getElementById("name_text"+no).value;
 var student_roll=document.getElementById("roll_text"+no).value;
 var subject=document.getElementById("subject_text"+no).value;
 var marks=document.getElementById("marks_text"+no).value;
 var marked_by=document.getElementById("markedBy_text"+no).value;
	
 var table=document.getElementById("data_table");
 var table_len=(table.rows.length)-1;
 var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'> <td id='name_val"+table_len+"'>"+new_name+"</td><td id='student_roll"+table_len+"'>"+new_rollnumber+"</td><td id='subject"+table_len+"'>"+new_subject+"</td><td><td id='marks"+table_len+"'>"+new_marks+"</td><td><td id='marked_by"+table_len+"'>"+new_marked_By+"</td><td></td><input type='button' id='save_button"+table_len+"'value='Save' class='save' onclick='save_row("+table_len+")'>"
 document.getElementById("name_row"+no).innerHTML=name_val;
 document.getElementById("roll_row"+no).innerHTML=student_roll;
 document.getElementById("subject_row"+no).innerHTML=subject;
 document.getElementById("marks_row"+no).innerHTML=marks;
 document.getElementById("markedBy_row"+no).innerHTML=marked_by;
}

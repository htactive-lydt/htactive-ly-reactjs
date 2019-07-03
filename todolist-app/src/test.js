 <li class="list-group-item checkbox">
            <div class="row">
                <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 checkbox">
                <label><input id="toggleTaskStatus" type="checkbox" onchange="" value="" class=""
                </div>
                <div class="col-md-10 col-xs-10 col-lg-10 col-sm-10 task-text}">
                <input type="text" value="" style="border: none; background-color: #fff; width: 300px; height: 30px" disabled id="${task.id}"></input>
                
                </div>
                <div class="col-md-1 col-xs-1 col-lg-1 col-sm-1 delete-icon-area">
                <a class="" onClick="toDo.editTask(event, '${task.id}')" id = "save-${task.id}"><i id="editTask" data-id="${task.id}" class="edit-icon fa fa-pencil-square-o"></i></a>
                <a class="" onClick="toDo.deleteTodo(event, '${task.id}')" data-confirm="Are you sure to delete this item?"><i id="deleteTask" data-id="${task.id}" class="delete-icon glyphicon glyphicon-trash"></i></a>
                </div>
            </div>
            </li>
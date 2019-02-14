
$(document).on("submit","#actionform",function(e){
    e.preventDefault();
    var val1 = $("#val1").val()
    var val2 = $("#val2").val()
    var result = parseInt(val1) + parseInt(val2);
 $("#actionform")[0].reset()
 $("#result").html(result)
});

$(document).on("submit","#action",function(e){
    e.preventDefault();
    var a = $("#val3").val()
    var b = $("#val4").val()
    var c = $("#val5").val()
    if(a > b && a > c){
        var results = ( a + " is the greatest")
    } else if(b >  c){
      var results = ( b + " is the greatest")
  }else{
    var results = ( c + " is the greatest")
  }
 $("#action")[0].reset()
 $("#results").html(results)
});
$(document).on("submit","#actions",function(e){
    e.preventDefault();
    var val6 = $("#val6").val()

    if(val6 >=75 && val6 <= 100){
        answer = ("Excellent :A1")
    }else if(val6 >= 65 && val6 <= 74 ){
        answer = ("Very Good: B2")
    }else if(val6 >= 55 && val6 <= 64){
        answer = ("Credit: C4")
    }else if(val6 >= 50 && val6 <=54){
        answer = ("Credit: C5")
    }else if(val6 >=1 && val6 <= 49) {
        answer = ("Fail: F9");
    } else{
      
    }
 $("#actionform")[0].reset()
 $("#answer").html(answer)
});

items = {
    bread: 100,
    cookies: 80,
    sweet: 20,
    garri: 50,
    chicken: 500,
    fanta: 250,
    pizza: 2000
}
displayitems();
cart = []
position = 0
action = ""

function displayitems(){
    i=1
    lines = ""
    for(var item in items)
    {
        lines += "<tr>";
        lines += "<td>" +  i +"</td>";
        lines += "<td>" + item + "</td>";
        lines += "<td>" + items[item] + "</td>";
        lines += "<td><a href='#' class='direct' id='"+item+"' >add</a></td>";
        lines += "</tr>"
        i++
    }
    $('#storeitems').html(lines)
}


$(document).on('submit','#orderform', function(e){
    e.preventDefault();
    action = "add"
    item = $('#basket').val()
    if (items[item]) {
        if (cart.length > 0) {
            for (i = 0; i < cart.length; i++) {
                if (cart[i]['item'] == item) {
                    position = i
                    action = "update"
                    break;
                }
            }
        }
        if (action == "add") {
            add(item)
        } else if (action == "update") {
            update(position)
        }
    }else{
        alert("we don't have this item sorry");
    }
});
 

function add(item) {
    data = {
        item: item,
        qty: 1
    }
    cart.push(data)
    $('#orderform')[0].reset()
    display();
}
function update(position) {
    cart[position]['qty']++
    $('#orderform')[0].reset()
    display()
}
function clear() {
    cart = []
    action = ""
    position = 0
    display()
}

function delete_item(item) {
    for (i = 0; i < cart.length; i++) {
        if (cart[i]['item'] == item) {
            cart.splice(i-1, 1)
            alert("deleted")
            console.log(cart)
        }
    }
    display()
}

function display() {

    total = 0;
    qtys = 0;
    prices = 0;
    for (i = 0; i < cart.length; i++) {
        total = total + (items[cart[i]['item']] * cart[i]['qty'])
        qtys += cart[i]['qty']
        prices += items[cart[i]['item']]
        rows += "<tr>"
        rows += "<td>"+ (i+1) +"</td>"
        rows += "<td>" + cart[i]['item'] + "</td>"
        rows += "<td>" + cart[i]['qty'] + "</td>"
        rows += "<td>" + items[cart[i]['item']] + "</td>"
        rows += "<td>" + cart[i]['qty'] * items[cart[i]['item']] + "</td>"
        rows += "<td><a href='#' class='delete' id='" + item + "' >Delete</a></td>";
        rows += "</tr>"
    }
    $('#cart').html(rows)
    $('#qtys').html(qtys)
    $('#prices').html(prices) 
    $('#total').html(total)
}

$(document).on('click', '#clear', function (e) {
    e.preventDefault()
    clear();
})

$(document).on('click', '.delete', function (e) {
    e.preventDefault()
    item = $(this).attr('id')
    delete_item(item)
})

$(document).on('click', '.direct', function(e){
    e.preventDefault()
    action = "add"
    item = $(this).attr('id')
    if (items[item]) {
        if (cart.length > 0) {
            for (i = 0; i < cart.length; i++) {
                if (cart[i]['item'] == item) {
                    position = i
                    action = "update"
                    break;
                }
            }
        }
        if (action == "add") {
            add(item)
        } else if (action == "update") {
            update(position)
        }
    }
})

data = []
$(document).on('submit', '#regForm', function(e){
    e.preventDefault();
    error = ""
    name = $('#name').val().trim();
    age = $('#age').val();
    clas = $('#class').val().trim();
    username = $('#user').val().trim();
    pass = $('#pass').val().trim();
    cpass = $('#cpass').val().trim();
    if(name != "" || clas != "" || username != "" || pass != ""){
        if (pass == cpass){
            if(data.length != 0)
            {
                for (i = 0; i < data.length; i++) {
                    if(data[i]['username'] == username)
                    {
                        error = "The username has been taken";
                        break;
                    }
                }
            }

            if (error == "")
            {
              student = {
                  name:name,
                  age:age,
                  class:clas,
                  username:username,
                  password:pass
              }  
              data.push(student);
              $('#regForm')[0].reset();
              alert("Your details has been received");
            } else {
                alert(error)
            }

        }else{
            alert("The password is not the same")
        }
    }else{
        alert("please fill all the information fields")
    }
})

function display(){
    
for (i = 0; i < data.length; i++) {
    rows += "<tr>"
    rows += "<td>"+ (i+1) +"</td>"
    rows += "<td>" + data[i]['name'] + "</td>"
    rows += "<td>" + data[i]['age'] + "</td>"
    rows += "<td>" + data[i]['class'] + "</td>"
    rows += "</tr>"
}
$('#datas').html(rows)

}


$(document).on('submit', '#loginForm', function (e) {
    e.preventDefault();
    username = $('#username').val();
    password = $('#password').val();

    for (i=0; i<data.length; i++){
        if (data[i]['username'] == username && data[i]['password'] == password)
        {
            $('#outName').html(data[i]['name'])
            $('#outAge').html(data[i]['age'])
            $('#outClass').html(data[i]['class'])
            $('#dataModal').modal('show');
            break;
        }
        if (i == data.length){
                alert("Username or/and password incorrect");
        }
    }
})
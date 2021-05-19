var wrap = document.getElementById('wrap');
// 用表格形式显示一个九九乘法表
document.write("<table>");  
  
for (var x = 1; x <= 9; x++)  
{  
    document.write("<tr>");  
    for (var y = 1; y <= x; y++)  
    {  
        document.write("<th>"+y+"*"+x+"="+y*x+"</th>");  
    }  
    document.write("</tr>");  
}  
document.write("</table>");  

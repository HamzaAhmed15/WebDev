function changeText() {
 document.getElementById("textChange").innerHTML="Thanks for liking my Webpage";
}
 var space = " ";
var pos = 0;
var msg = "Trang Nguyen";

 function Scroll(){
document.title = msg.substring(pos, msg.length) + space +msg.substring(0,pos);


 pos++;
if (pos > msg.length) pos = 0;
window.setTimeout("Scroll()", 0);
}
Scroll();


<!--

/*
Submitted by David Gardner (davidgardner7@yahoo.com)
Featured on JavaScript Kit (http://javascriptkit.com)
For this and over 400+ free scripts, visit http://javascriptkit.com
*/

function getpet () {

        var toyear = 1997;
        var birthyear = document.frm.inyear.value;
        var birthpet="Ox"

        x = (toyear - birthyear) % 12
        if ((x == 1) || (x == -11)) {
            birthpet="Mouse"      }
            else  {
             if (x == 0)             {
             birthpet="Ox"           }
             else  {
              if ((x == 11) || (x == -1)) {
              birthpet="Tiger"          }
              else  {
               if ((x == 10) || (x == -2)) {
               birthpet="Rabbit"         }
               else  {
                if ((x == 9) || (x == -3))  {
                birthpet="Dragon"         }
                else  {
                 if ((x == 8) || (x == -4))  { 
                 birthpet="Snake"          }
                 else  {
                  if ((x == 7) || (x == -5))  { 
                  birthpet="Horse"          }
                  else  {
                   if ((x == 6) || (x == -6))  { 
                   birthpet="Sheep"          }
                   else  {
                    if ((x == 5) || (x == -7))  {  
                    birthpet="Monkey"         }
                    else  {
                     if ((x == 4) || (x == -8))  {
                     birthpet="Chicken"        }
                     else  {
                      if ((x == 3) || (x == -9))  {
                      birthpet="Dog"            }
                      else  {
                       if ((x == 2) || (x == -10))  {
                       birthpet="Pig"             }  
                      }
                     }
                    }
                   }
                  }
                 }
                }
               }
              }
             }
            }
        document.frm.birth.value = birthpet;

}
// -->
</script>


    <p>Enter your birth year. For example: "1975" </p>
    <form NAME="frm">
      <p><input TYPE="text" SIZE="4" NAME="inyear" value="1975"> <input TYPE="button" VALUE="My pet, please"
      onClick="getpet()"> <br>
      </p>
      <p><input TYPE="text" SIZE="9" NAME="birth"> </font></p>
    </form>

<p align="center"><font face="arial" size="-2">This free script provided by</font><br>
<font face="arial, helvetica" size="-2"><a href="http://javascriptkit.com">JavaScript
Kit</a></font></p>






<script language="javascript" type="text/javascript">
 //By Sandeep Gangadharan (http://www.sivamdesign.com/home/)
//For this script and more, visit http://javascriptkit.com
 function sunsign() {
   document.form1.date.selectedIndex;
   document.form1.month.selectedIndex;
   document.form1.sign.value;
   if (document.form1.month.selectedIndex == 1 && document.form1.date.selectedIndex <=19) {document.form1.sign.value = "Capricorn";}
   if (document.form1.month.selectedIndex == 1 && document.form1.date.selectedIndex >=20) {document.form1.sign.value = "Aquarius";}
   if (document.form1.month.selectedIndex == 2 && document.form1.date.selectedIndex <=18) {document.form1.sign.value = "Aquarius";}
   if (document.form1.month.selectedIndex == 2 && document.form1.date.selectedIndex >=19) {document.form1.sign.value = "Pisces";}
   if (document.form1.month.selectedIndex == 3 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Pisces";}
   if (document.form1.month.selectedIndex == 3 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Aries";}
   if (document.form1.month.selectedIndex == 4 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Aries";}
   if (document.form1.month.selectedIndex == 4 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Taurus";}
   if (document.form1.month.selectedIndex == 5 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Taurus";}
   if (document.form1.month.selectedIndex == 5 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Gemini";}
   if (document.form1.month.selectedIndex == 6 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Gemini";}
   if (document.form1.month.selectedIndex == 6 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Cancer";}
   if (document.form1.month.selectedIndex == 7 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Cancer";}
   if (document.form1.month.selectedIndex == 7 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Leo";}
   if (document.form1.month.selectedIndex == 8 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Leo";}
   if (document.form1.month.selectedIndex == 8 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Virgo";}
   if (document.form1.month.selectedIndex == 9 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Virgo";}
   if (document.form1.month.selectedIndex == 9 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Libra";}
   if (document.form1.month.selectedIndex == 10 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Libra";}
   if (document.form1.month.selectedIndex == 10 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Scorpio";}
   if (document.form1.month.selectedIndex == 11 && document.form1.date.selectedIndex <=21) {document.form1.sign.value = "Scorpio";}
   if (document.form1.month.selectedIndex == 11 && document.form1.date.selectedIndex >=22) {document.form1.sign.value = "Sagittarius";}
   if (document.form1.month.selectedIndex == 12 && document.form1.date.selectedIndex <=20) {document.form1.sign.value = "Sagittarius";}
   if (document.form1.month.selectedIndex == 12 && document.form1.date.selectedIndex >=21) {document.form1.sign.value = "Capricorn";}
    if (document.form1.month.selectedIndex == "x" || document.form1.date.selectedIndex == "y") return;
 }
 function validate() {
   if (document.form1.month.selectedIndex == 2 && document.form1.date.selectedIndex > 29) {alert("There are only a maximum of 29 days in February."); return false;}
   if (document.form1.month.selectedIndex == 4 && document.form1.date.selectedIndex == 31) {alert("There are only 30 days in April."); return false;}
   if (document.form1.month.selectedIndex == 6 && document.form1.date.selectedIndex == 31) {alert("There are only 30 days in June."); return false;}
   if (document.form1.month.selectedIndex == 9 && document.form1.date.selectedIndex == 31) {alert("There are only 30 days in September."); return false;}
   if (document.form1.month.selectedIndex == 11 && document.form1.date.selectedIndex == 31) {alert("There are only 30 days in November."); return false;}
else{
return true;
}
 }
 </script>
 <center> My name is User #18</center>
<form name="form1">
 <table border="0" bgcolor="c0c0c0" cellspacing="0" cellpadding="1">
  <tr>
    <td>
        <font size="1" face="verdana, arial, helvetica, sans-serif"><b>&nbsp;Month&nbsp;</b></font>
    </td>
    <td>
        <font size="1" face="verdana, arial, helvetica, sans-serif"><b>&nbsp;Date&nbsp;</b></font>
    </td>
    <td rowspan="2">
        <font size="3" face="verdana, arial, helvetica, sans-serif"><b>&nbsp;&nbsp;<b>:</b>&nbsp;</b></font>
    </td>
    <td>
        <font size="1" face="verdana, arial, helvetica, sans-serif"><b>&nbsp;Sunsign&nbsp;</b></font>
    </td>
  </tr>
  <tr>
    <td>
                    &nbsp;<select name="month">
                    <option value="x" selected>&lt; Select &gt;&nbsp;</option>
                    <option value="1">January</option>
                    <option value="2">February</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                    </select>
    </td>
    <td>
                    &nbsp;<select name="date" onChange="validate()">
                    <option value="y" selected>&lt; Select &gt;&nbsp;</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                    </select>
    </td>
    <td>
        &nbsp;<input name="sign" size="12" value="??" />&nbsp;<input type="button" value="submit" onClick="sunsign()">
    </td>
  </tr>
</table>
</form>
<p><font face="arial" size="1">This free script provided by</font>
<a href="http://javascriptkit.com"><font face="arial,helvetica" size="1">JavaScript Kit</font></a>
</p>
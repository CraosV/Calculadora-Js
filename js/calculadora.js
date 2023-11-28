function botones(buttonId)
			{
				res=document.getElementById("res");
				switch(buttonId)
				{
					case "b1":
					res.value+="1";break;
					case "b2":
					res.value+="2";break;
					case "b3":
					res.value+="3";break;
					case "b4":
					res.value+="4";break;
                    case "b5":
					res.value+="5";break;
					case "b6":
					res.value+="6";break;
					case "b7":
					res.value+="7";break;
					case "b8":
					res.value+="8";break;
                    case "b9":
					res.value+="9";break;
                    case "b0":
					res.value+="0";break;
					case "addition":
					res.value+="+";break;
					case "subtraction":
					res.value+="-";break;
					case "product":
					res.value+="*";break;
					case "quotient":
					res.value+="/";break;
					case "equal":
					operacionpartida=res.value.match(/[+\-\*\/]|\d+/g);
					resultado=parseInt(operacionpartida[0]);
						for (let i = 0; i < operacionpartida.length; i++) 
						{
							switch(operacionpartida[i])
							{
								case "+":
								resultado+=parseInt(operacionpartida[i+1]);break;
								case "-":
								resultado-=parseInt(operacionpartida[i+1]);break;
								case "*":
								resultado*=parseInt(operacionpartida[i+1]);break;
								case "/":
								resultado/=parseInt(operacionpartida[i+1]);break;
							}
						}
					res.value=resultado;break;
					case "clear":
					res.value="";break;
				}			
			}
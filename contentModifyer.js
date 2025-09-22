
const AllTypes = ["user", "user-hidden", "uni", "uni+indie", "collage", "indie", "job", "year"];

function Download(dataurl, filename) {
  const link = document.createElement("a");
  link.href = dataurl;
  link.download = filename;
  link.click();
  link.remove();
}

function Lerp( t, a, b ) 
{
	return a + t * (b - a); 
}

function GetRandomFloatInRange( Min, Max )
{
	return Min +(Math.random() * (Max - Min));
}

function GetRandomIntInRange( Min, Max )
{
	return Math.floor((Min +(Math.random() * (Max - Min))) +0.5);
}

function SetImage( Type, Src )
{
	var elements = document.getElementsByName(Type);
	for(var i = 0; i < elements.length; i++)
	{
		elements[i].src = Src;
	}

}

function HideContentAll( Exception )
{
	for(var i = 0; i < AllTypes.length; i++) 
	{
		if( AllTypes[i] != Exception )
		{
			HideContent( AllTypes[i] );
		}
		else
		{
			ShowContent( AllTypes[i] )
		}
	}
}

function ShowContentAll( Exception )
{
	for(var i = 0; i < AllTypes.length; i++) 
	{
		if( AllTypes[i] != Exception )
		{
			ShowContent( AllTypes[i] );
		}
		else
		{
			HideContent( AllTypes[i] );
		}
	}
}

function ToggleAllContent( Exception ) 
{
	for(var i = 0; i < AllTypes.length; i++) 
	{
		if( AllTypes[i] != Exception )
		{
			ToggleContent( AllTypes[i] );
		}
	}
} 

function SwitchContent( Name, Index, Min, Max ) 
{
	for(var i = Min; i <= Max; i++)
	{
		if(i != Index)
		{
			var elements = document.getElementsByName(Name +"_" +i.toString());

			for(var o = 0; o < elements.length; o++) 
			{
				elements[o].style.display = "none";
				elements[o].style.visibility = "hidden";
			}
		}
		else
		{
			var elements = document.getElementsByName(Name +"_" +i.toString());
			for(var o = 0; o < elements.length; o++) 
			{
				elements[o].style.display = "block";
				elements[o].style.visibility = "visible";
			}
		}
	}
} 

function HideContent( Hide ) 
{
	var elements = document.getElementsByName(Hide);
	for(var i = 0; i < elements.length; i++) 
	{
		elements[i].style.display = "none";
		elements[i].style.visibility = "hidden";
	}
}

function HideYearsPost( Year ) 
{
	var elements = document.getElementsByName("year");
	for(var i = 0; i < elements.length; i++) 
	{
		if(parseFloat(elements[i].id) > Year)
		{
			elements[i].style.display = "none";
			elements[i].style.visibility = "hidden";
		}
	}
} 

function HideYearsPrior( Year ) 
{
	var elements = document.getElementsByName("year");
	for(var i = 0; i < elements.length; i++) 
	{
		if(parseFloat(elements[i].id) < Year)
		{
			elements[i].style.display = "none";
			elements[i].style.visibility = "hidden";
		}
	}
}

function HideYear( Year ) 
{
	var elements = document.getElementsByName("year");
	for(var i = 0; i < elements.length; i++) 
	{
		if(parseFloat(elements[i].id) == Year)
		{
			elements[i].style.display = "none";
			elements[i].style.visibility = "hidden";
		}
	}
}

function ShowYear( Year ) 
{
	var elements = document.getElementsByName("year");
	for(var i = 0; i < elements.length; i++) 
	{
		if(parseFloat(elements[i].id) == Year)
		{
			elements[i].style.display = "block";
			elements[i].style.visibility = "visible";
		}
	}
}

function ShowContent( Show ) 
{
	var elements = document.getElementsByName(Show);
	for(var i = 0; i < elements.length; i++) 
	{
		elements[i].style.display = "block";
		elements[i].style.visibility = "visible";
	}
} 

function ToggleContent( Show ) 
{
	var elements = document.getElementsByName(Show);
	for(var i = 0; i < elements.length; i++) 
	{
		if(elements[i].style.visibility == "visible")
		{
			elements[i].style.display = "none";
			elements[i].style.visibility = "hidden";
		}
		else
		{
				elements[i].style.display = "block";
			elements[i].style.visibility = "visible";
		}
	}
} 

function ChageText( Id, Text )
{
	var elements = document.getElementsByName(Id);
	for(var i = 0; i < elements.length; i++) 
	{
		elements[i].innerText = Text;
	}
}

function ToggleText( Id, Text, TextB )
{
	var elements = document.getElementsByName(Id);
	for(var i = 0; i < elements.length; i++) 
	{
		if(elements[i].innerText == Text)
		{
			elements[i].innerText = TextB;
		}
		else
		{
			elements[i].innerText = Text;
		}
	}
}
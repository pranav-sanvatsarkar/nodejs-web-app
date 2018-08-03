var resetInput = function(elementName)
{
    var element = document.getElementById(elementName);
    if( element && element.value )
        element.value = '';
}
////////////////////////////////////////////////////////////////////////////////
//------------------------------------------------------------------------------
//------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////

var latest_comic                              = NUM_TOTAL_COMICS;

//$( document ).ready( init );

// More reliable than .ready?
if (
    (document.readyState === "complete") ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
)
{
    init();
}
else
{
    document.addEventListener("DOMContentLoaded", init);
}


/*============================================== General ==============================================*/

function init()
{
    clientConsoleLog("controller.js :: init()");

    updateHtmlHead();

    updateHtmlBody();

    runBodyScript();

    updateArchiveLinks();

    latest_comic = NUM_TOTAL_COMICS;

    showComicFrame( latest_comic );
}

/*============================================== Console Log ==============================================*/

// For debugging, call this wrapper instead of the native console.log
// That way we can be sure that debug logging won't get printed to the console in production release builds
function clientConsoleLog( str )
{
    //console.log( str );
}

/*============================================== Head ==============================================*/

function updateHtmlHead()
{
    document.head.innerHTML += HTML_HEAD;
}

/*============================================== Body ==============================================*/

function updateHtmlBody()
{
    document.body.innerHTML = HTML_BODY;
}

/*============================================== Display ==============================================*/

function showComicFrame( id )
{
    var frame = document.getElementById("comic_frame");

    if (frame)
    {
        frame.src = id + "/solver_lining_" + id + ".png";
    }
}

function updateArchiveLinks()
{
    var links = document.getElementById("links01");

    if (links)
    {
        var n = NUM_TOTAL_COMICS;

        for (var i = 0; i < NUM_TOTAL_COMICS; i++)
        {
            links.innerHTML += '<li><a class="n01" href="' + getComicUrl( n ) + '">' + COMIC_TITLES[ i ] + '</a></li>';

            n--;

            if (n < 1)
            {
                n = 1;
            }
        }
    }
}

/*============================================== Controls ==============================================*/


function goToComic( id )
{
    window.location.href = URL_HOME + "/" + id + "/";
}

function getComicUrl( id )
{
    return (URL_HOME + "/" + id + "/");
}

function goToPreviousComic()
{
    var new_comic = latest_comic - 1;

    if (new_comic < 1)
    {
        new_comic = 1;
    }
    else
    {
        goToComic( new_comic );
    }

    //clientConsoleLog( "controller.js :: goToPreviousComic() - new comic = " + new_comic);
}

function goToNextComic()
{
    clientConsoleLog( "controller.js :: goToNextComic()" );
}

function goToFirstComic()
{
    clientConsoleLog( "controller.js :: goToFirstComic()" );

    goToComic( 1 );
}

function goToLastComic()
{
    clientConsoleLog( "controller.js :: goToLastComic()" );
}

function goToRandomComic()
{
    // Returns a random frame between 1 and NUM_TOTAL_COMICS
    var new_comic = Math.floor( Math.random() * NUM_TOTAL_COMICS ) + 1;

    clientConsoleLog( "controller.js :: goToRandomComic() - new comic = " + new_comic);

    goToComic( new_comic );
}

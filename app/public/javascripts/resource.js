var resource = {};

/**
* Assigns a background color of light green behind grass tiles 
* @return {grass} returns grass as the name of the tiles resource
**/
resource.grass = function ()
{
    this._colour = "lightgreen";
    this.getSprite = function ()
    {
        return "grass";
    }
}

/**
* Assigns a background color of light green behind Mech titles
* @return {swamp} returns water as the name of the tiles resource
**/
resource.swamp = function ()
{
    this._colour = "lightgreen";
    this.getSprite = function ()
    {
        return "swamp";
    }
}

/**
* Assigns a background color of light blue behind water tiles
* @return {water} returns water as the name of the tiles resource
**/
resource.water = function()
{
    this._colour = "lightblue";
    this.getSprite = function ()
    {
        return "water";
    }
}

/**
* Assigns a background color of green behind forest tiles
* @return {forest} returns forest as the name of the tiles resource
**/
resource.forest = function ()
{
    this._colour = "green";
    this.getSprite = function ()
    {
        return "forest";
    }
}

/**
* Assigns a background color of brown behind mountain titles 
* @return {mountain} returns mountain as the name of the tiles resource
**/
resource.mountain = function ()
{
    this._colour = "#817e6d";
    this.getSprite = function ()
    {
        return "mountain";
    }
}


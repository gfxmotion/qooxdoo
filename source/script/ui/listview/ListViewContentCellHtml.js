/* ************************************************************************

   qooxdoo - the new era of web interface development

   Copyright:
     (C) 2004-2006 by Schlund + Partner AG, Germany
         All rights reserved

   License:
     LGPL 2.1: http://creativecommons.org/licenses/LGPL/2.1/

   Internet:
     * http://qooxdoo.oss.schlund.de

   Authors:
     * Sebastian Werner (wpbasti)
       <sebastian dot werner at 1und1 dot de>
     * Andreas Ecker (aecker)
       <andreas dot ecker at 1und1 dot de>

************************************************************************ */

/* ************************************************************************

#package(listview)

************************************************************************ */

qx.OO.defineClass("qx.ui.listview.ListViewContentCellHtml", qx.ui.embed.HtmlEmbed, 
function(vHtml)
{
  qx.ui.embed.HtmlEmbed.call(this, vHtml);

  this.setSelectable(false);
});

qx.ui.listview.ListViewContentCellHtml.changeProperty({ name : "appearance", type : qx.Const.TYPEOF_STRING, defaultValue : "list-view-content-cell-html" });

qx.ui.listview.ListViewContentCellHtml.empty = {
  html : qx.Const.CORE_EMPTY
};

"use strict";

/*
	New Perspectives on HTML5 and CSS3, 8th Edition
	Tutorial 10
	Case Problem 1

	Author: Sean Briggs
	Date:   2025-11-11
	
	Filename: tc_cart.js

	The cartHTML variable creates a table with the item ID, description,
	price, and quantity information for each of the items in the lists
	described in "tc_order.js".
	As the loop progresses, it adds each item cost to the order total
	which is displayed in the bottom row of the table.
	
*/

var orderTotal = 0;
var cartHTML = "<table> <tr> <th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th> </tr>";

for (var i = 0; i < item.length; i++) {
	cartHTML += "<tr> <td><img src='tc_" + item[i] + ".png' alt='" + item[i] + "' /></td>";
	cartHTML += "<td>" + itemDescription[i] + "</td> <td>$" + itemPrice[i] + "</td> <td>" + itemQty[i] + "</td>";
	var itemCost = itemPrice[i] * itemQty[i];
	cartHTML += "<td>$" + itemCost + "</td> </tr>";
	orderTotal += itemCost;
}

cartHTML += "<tr> <td colspan='4'>Subtotal</td> <td>$" + orderTotal + "</td> </tr> </table>";
document.getElementById("cart").innerHTML = cartHTML;
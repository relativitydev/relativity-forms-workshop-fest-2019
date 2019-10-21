using System;
using System.Collections.Generic;
using kCura.EventHandler;

namespace WorkshopEventHandlers
{
	[kCura.EventHandler.CustomAttributes.Description("Console EventHandler")]
	[System.Runtime.InteropServices.Guid("3727f7b6-4d14-4910-9ae4-6414df62f1ec")]
	public class WorkshopConsoleEH : kCura.EventHandler.ConsoleEventHandler
	{
		private const String CONSOLE_TITLE = "Contain Yourself!";
		private const String BUTTON_NAME = "_button";
		private const String BUTTON_DISPLAY_TEXT = "Report Enthusiasm";
		private const String BUTTON_TOOL_TIP = "Reports on the current person's enthusiasm";

		public override FieldCollection RequiredFields
		{
			get
			{
				kCura.EventHandler.FieldCollection retVal = new kCura.EventHandler.FieldCollection();
				return retVal;
			}
		}

		public override kCura.EventHandler.Console GetConsole(PageEvent pageEvent)
		{
			// Construct a console object to build the console appearing in the UI.
			kCura.EventHandler.Console returnConsole = new kCura.EventHandler.Console();
			returnConsole.Items = new List<kCura.EventHandler.IConsoleItem>();
			returnConsole.Title = CONSOLE_TITLE;

			// Construct the reporting button.
			kCura.EventHandler.ConsoleButton button = new kCura.EventHandler.ConsoleButton();
			button.Name = BUTTON_NAME;
			button.DisplayText = BUTTON_DISPLAY_TEXT;
			button.ToolTip = BUTTON_TOOL_TIP;
			button.RaisesPostBack = false;
			button.Enabled = true;

			//Create the JavaScript for the button and set the button "OnClickEvent" property.
			button.OnClickEvent = "alert('Imagine that I am a report on the current person\\\'s enthusiasm');";

			returnConsole.Items.Add(button);

			return returnConsole;
		}

		public override void OnButtonClick(ConsoleButton consoleButton)
		{
			// Do nothing. This Button is all front-end
		}
	}
}
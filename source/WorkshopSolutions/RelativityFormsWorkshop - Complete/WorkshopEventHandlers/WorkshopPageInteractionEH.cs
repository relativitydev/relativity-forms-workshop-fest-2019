using System;
using kCura.EventHandler;

namespace WorkshopEventHandlers
{
	[kCura.EventHandler.CustomAttributes.Description("Page Interaction EventHandler")]
	[System.Runtime.InteropServices.Guid("7fc07c6d-3a2d-42bf-a229-ef8cfdd962ed")]
	public class WorkshopPageInteractionEH : kCura.EventHandler.PageInteractionEventHandler
	{
		public static readonly Guid CURRENT_ENTHUSIASM_GUID = new Guid("692C7C4D-3C6B-4729-86E4-426A101E1479");
		public static readonly Guid MAXIMUM_ENTHUSIASM_GUID = new Guid("5426056E-C815-430C-93FB-57C979A88715");
		public static readonly Guid CONTAIN_ENTHUSIASM_GUID = new Guid("0EE79570-5540-49F9-8DED-BDE5840AF433");

		public override Response PopulateScriptBlocks()
		{
			kCura.EventHandler.Response retVal = new kCura.EventHandler.Response();
			retVal.Success = true;
			retVal.Message = string.Empty;

			// Obtain Workspace-specific ArtifactIDs for the Fields we're addressing by GUID, as only ArtifactID and
			// Field's Friendly Name can be used directly to obtain the Field's DOM reference.
			string CONTAIN_ID = this.ActiveArtifact.Fields[CONTAIN_ENTHUSIASM_GUID.ToString()].ArtifactID.ToString();
			string MAXIMUM_ID = this.ActiveArtifact.Fields[MAXIMUM_ENTHUSIASM_GUID.ToString()].ArtifactID.ToString();
			string CURRENT_ID = this.ActiveArtifact.Fields[CURRENT_ENTHUSIASM_GUID.ToString()].ArtifactID.ToString();

			// Controls are different in View mode than in Edit (which includes both Edit and Add)
			// We need to know this in the JavaScript.
			bool isViewMode = this.PageMode == kCura.EventHandler.Helper.PageMode.View;
			string jsIsViewMode = isViewMode ? "true" : "false";

			String startUp;
			#region JavaScript PIEH code

				startUp = String.Format(@"<script type=""text/javascript"">
$(document).ready(function() {{
	// Note the use of jQuery in the line above.
	// This assumes that jQuery will always be available on the window.
	// That assumption may one day not be safe.

	// functions to get Field Cells (parent DOM element containing the Field you want)

		function getFieldCellByArtifactId(artifactId) {{
			return document.querySelector(""[faartifactid = '"" + artifactId + ""']"").parentElement;
		}}

		function getFieldCellByFriendlyName(friendlyName) {{
			return document.querySelector(""[fafriendlyname='"" + friendlyName + ""']"").parentElement;
		}}


	// functions to get values for Fields (Input for text and number, Radio for yes/no* (in radio mode only))
	
		function getFieldInputValue(fieldCell) {{
			// Note the DOM traversal here, and the inherent assumption that the markup
			// for this Field type will not change significantly.
			var value = fieldCell.childNodes[2].childNodes[0][isViewMode ? 'innerText' : 'value'];
			return value.trim();
		}}

		function getFieldRadioValue(fieldCell) {{
			// Again, note the DOM traversal. For radio button display types, the
			// Markup is quite different in View mode than it is in Edit mode.
			// In View mode, the value is determined by string comparison, which
			// could be brittle. If someone alters the Yes/No values for this Field
			// it may be catastrophic to the operation of this event handler in View
			// mode. Obviously, the given selector will not work properly if the
			// Layout for this type were to change the display type of the Yes/No
			// Field to something other than radio.
			var value;
			if (isViewMode) {{
				value = fieldCell.childNodes[2].textContent === yesValue;
			}} else {{
				var radio = fieldCell.childNodes[2];
				var yesRadio = radio.querySelectorAll(""[type = 'radio']"")[0];
	
				value = yesRadio.checked;
			}}
			return value;
		}}


	// functions for the show/hide behaviors

		function toggleMaximumEnthusiasm(show) {{
			// Direct access to the DOM element makes easy synchronous work
			// of performing this hide.
			maximumEnthusiasmCell.hidden = !show;
		}}

		function toggleMaximumEnthusiasmByRadio() {{
			toggleMaximumEnthusiasm(getFieldRadioValue(containEnthusiasmCell));
		}}


	// variable definitions

		// EH PageMode Shortcut
		var isViewMode = {0};

		// Name Field
		var nameCell = getFieldCellByFriendlyName('Name');
    
		// Yes/No Field shown as radio. ""yesValue"" used within get value function for this type
		var containEnthusiasmFieldId = '{1}';
		var containEnthusiasmCell = getFieldCellByArtifactId(containEnthusiasmFieldId); 
		var yesValue = 'Ok, I will.';

		// Whole Number Fields for Max and Current Enthusiasm
		var maximumEnthusiasmFieldId = '{2}';
		var maximumEnthusiasmCell = getFieldCellByArtifactId(maximumEnthusiasmFieldId);
		var currentEnthusiasmFieldId = '{3}';
		var currentEnthusiasmCell = getFieldCellByArtifactId(currentEnthusiasmFieldId);

	// Execute immediately upon document ready

		// When we're not in View mode, we want a change event on the radio button yes/no Field
		if (!isViewMode) {{
			containEnthusiasmCell.onclick = toggleMaximumEnthusiasmByRadio;
		}}

		// Make sure the 'Maximum Enthusiasm' cell is shown or hidden appropriately
		toggleMaximumEnthusiasmByRadio();

}});
</script>", jsIsViewMode, CONTAIN_ID, MAXIMUM_ID, CURRENT_ID);

			#endregion

			this.RegisterStartupScriptBlock(new kCura.EventHandler.ScriptBlock() { Key = "startup", Script = startUp });

			return retVal;
		}

		public override string[] ScriptFileNames => new string[] { "relativityFormsConversion.js" };
	}
}
# 01 - Sublime Text Settings

## Update for SublimeText 4

### Preferences

The menu option _"Preferences - Settings Default"_ does not exist anymore. It is not necessary to open the default & user preferences separately. When clicking _"Preferences - Settings"_ Sublime will open a split view with the default settings on one side and overriding user settings on the other. The same is true for keyboard shortcuts (_"Preferences - Key Bindings"_).

### Keyboard shortcut for "Preferences - Settings".

The video mentions `"ctrl+,"` as the keyboard shortcut for Settings on non-macOS systems. This does not work.
SublimeText 4 on Linux doesn't seem to have a keyboard shortcut set for Settings. It is not even mentioned in the default `Preferences.sublime-settings` file.
One has to configure this explicitely (_"Preferences - Key Bindings")_:

```json
[
	{ "keys": ["ctrl+,"], "command": "edit_settings", "args":
	    {
	        "base_file": "${packages}/Default/Preferences.sublime-settings",
	        "default": "// Settings in here override those in \"Default/Preferences.sublime-settings\",\n// and are overridden in turn by syntax-specific settings.\n{\n\t$0\n}\n"
	    }
	},
]
```

Credits to this solution to https://stackoverflow.com/a/38376612/128030

### Trailing comma problem

Sublime Text 4 seems to have learned to tolerate trailing commas. It is not a problem anymore.

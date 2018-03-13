@ECHO OFF
SET moduleInstaller="D:\PTFS\Poseidon\Platform\DEV\Poseidon.Module.Installer\bin\Debug\Poseidon.Module.Installer.exe"
SET manifest=SamplePoseidonApp.manifest.json
CALL %moduleInstaller% install %manifest%
PAUSE
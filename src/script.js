      /* --- 1. ข้อมูลเกม (Game Data) พร้อม Description เต็ม --- */
      const gameData = [
        {
          id: "elden-ring",
          title: "Elden Ring",
          iconUrl:
            "https://cdn2.steamgriddb.com/icon/7316e11fe78963395fbab4a85d0b8f85.ico",
          youtubeId: "eD_oYIbublE",
          description:
            'Elden Ring คือมหากาพย์ Action RPG จาก FromSoftware (ผู้สร้าง Dark Souls) ที่ยกระดับเกมสไตล์ Souls-like สู่โลก Open World อันกว้างใหญ่ไพศาลที่เรียกว่า "The Lands Between" สวมบทบาท "ผู้มัวหมอง" (Tarnished) ออกผจญภัยได้อย่างอิสระ, ต่อสู้กับเหล่า Demigod สุดท้าทาย, ค้นพบดันเจี้ยนและความลับที่ซ่อนอยู่, และเพลิดเพลินกับการสร้างบิวด์ตัวละครที่หลากหลาย นี่คือเกมที่ผสมผสานการต่อสู้ที่ดุดัน, การสำรวจที่คุ้มค่า, และงานศิลป์ที่งดงามไว้ได้อย่างลงตัว',
          score: "8/10",
          tags: [
            "Action RPG",
            "Open World",
            "Souls-like",
            "Dark Fantasy",
            "Singleplayer",
            "Hardcore",
          ],
          pros: [
            "โลก Open World ที่น่าทึ่ง",
            "การต่อสู้ที่ท้าทาย",
            "Art Design อลังการ",
            "อิสระในการสร้างบิวด์",
          ],
          cons: [
            "เกมมีความยากสูงมาก",
            "การเล่าเรื่องแบบปลายเปิด",
            "ปัญหา Performance บางจุด",
            "ดันเจี้ยนซ้ำบ้าง",
          ],
          steamUrl: "https://store.steampowered.com/app/1245620/ELDEN_RING/",
        },
        {
          id: "monster-hunter-world",
          title: "Monster Hunter World",
          iconUrl:
            "https://cdn2.steamgriddb.com/icon_thumb/c4ace1b3502c205d946d46afc3de1766.png",
          youtubeId: "D8ubGtcYxpA",
          description:
            'Monster Hunter: World คือเกม Action RPG ที่พาคุณสู่ "New World" โลกใหม่ที่เต็มไปด้วยมอนสเตอร์ยักษ์สุดอลังการ สวมบทบาทเป็น "Hunter" ออกสำรวจ, ติดตามร่องรอย, และล้มอสูรร้ายในระบบนิเวศที่มีชีวิตชีวา จุดเด่นคือเกมเพลย์การต่อสู้ที่ท้าทายและต้องอาศัยกลยุทธ์, อาวุธ 14 ประเภทที่มีสไตล์การเล่นต่างกันสุดขั้ว, และลูปการเล่นที่สนุกจนติดหนึบ: "ล่ามอนสเตอร์" เพื่อนำชิ้นส่วนมา "สร้างอาวุธและชุดเกราะ" ที่แกร่งขึ้น เพื่อออกไป "ล่าตัวที่โหดกว่าเดิม"',
          score: "9/10",
          tags: ["Action RPG", "Co-op", "Hunting", "Open World", "Multiplayer"],
          pros: [
            "มอนสเตอร์ยิ่งใหญ่",
            "อาวุธ 14 ชนิด",
            "World สวยงาม",
            "Co-op สนุก",
          ],
          cons: ["ต้องฟาร์มของหนัก", "ระบบซับซ้อน", "เนื้อเรื่องธรรมดา"],
          steamUrl:
            "https://store.steampowered.com/app/582010/Monster_Hunter_World/",
        },
        {
          id: "project-zomboid",
          title: "Project Zomboid",
          iconUrl:
            "https://cdn2.steamgriddb.com/icon/30999ce1f0a35aeff9a456e4487f9924.png",
          youtubeId: "r8gdGOqcZvY",
          description:
            '"นี่คือเรื่องราวการตายของคุณ" — Project Zomboid คือเกมเอาชีวิตรอดจากซอมบี้แบบ Sandbox ที่เน้นความสมจริงขั้นสุด (Hardcore Survival) ในมุมมอง Isometric คุณต้องต่อสู้กับความหิว, ความเหนื่อยล้า, อาการบาดเจ็บ, สภาพจิตใจ และฝูงซอมบี้ที่ไร้ทางสู้ ทุกการกระทำมีความหมาย ตั้งแต่การหาอาหารกระป๋อง (ที่ต้องมีที่เปิด), การต้มน้ำ, ไปจนถึงการรักษาบาดแผลที่อาจติดเชื้อได้ตลอดเวลา ในโลกที่กว้างใหญ่และไร้ความปรานีแห่งนี้ เป้าหมายไม่ใช่การ "ชนะ" แต่คือการ "ยื้อความตาย" ออกไปให้ได้นานที่สุด',
          score: "9.5/10",
          tags: ["Survival", "Sandbox", "Zombie", "Simulation", "Isometric"],
          pros: [
            "ระบบ Survival สมจริง",
            "แผนที่ใหญ่",
            "ปรับแต่งได้เยอะ",
            "Mod เยอะ",
          ],
          cons: ["ตายแล้วตายเลย", "ภาพ Isometric", "Learning Curve สูง"],
          steamUrl:
            "https://store.steampowered.com/app/108600/Project_Zomboid/",
        },
        {
          id: "7-day-to-die",
          title: "7 Day To Die",
          iconUrl:
            "https://cdn2.steamgriddb.com/icon/cab8961422e0f17f3795d82388e9204b.ico",
          youtubeId: "UOE2Gt_E4SU",
          description:
            '7 Days to Die คือสุดยอดเกม Survival Horror แบบ Sandbox ที่ผสมผสานแนวเกมยิง (FPS), RPG, และ Tower Defense เข้าไว้ด้วยกันอย่างลงตัว คุณต้องเอาชีวิตรอดในโลกหลังการล่มสลายที่เต็มไปด้วยซอมบี้ โดยมีเวลา 7 วันในการสำรวจ, ฟาร์มของ, คราฟต์ไอเทม, และสร้างฐานที่มั่นสุดแกร่ง เพื่อเตรียมรับมือกับ "Blood Moon Horde" ฝูงซอมบี้สุดโหดที่จะบุกโจมตีคุณอย่างบ้าคลั่งในคืนวันที่เจ็ด',
          score: "7.5/10",
          tags: ["Survival Horror", "Voxel", "FPS", "Tower Defense"],
          pros: ["สร้างฐานสนุก", "ระบบคราฟต์ลึก", "Co-op มันส์", "โลก Voxel"],
          cons: ["กราฟิกค่อนข้างเก่า", "Bug ยังมีบ้าง"],
          steamUrl: "https://store.steampowered.com/app/251570/7_Days_to_Die/",
        },
        {
          id: "broforce",
          title: "Broforce",
          iconUrl:
            "https://cdn2.steamgriddb.com/icon/85554f207d7a7d8f7817ae532f0dd828.png",
          youtubeId: "uaBBMuCCqPo",
          description:
            'Broforce คือเกมแอ็กชัน 2D-Platformer แบบ "Run n Gun" สุดมันส์ ที่อัดแน่นไปด้วยความฮาและฉากระเบิดภูเขาเผากระท่อม สวมบทบาทเป็นเหล่า "Bro" (ที่ล้อเลียนตัวละครแอ็กชันในตำนานยุค 80-90s) ออกไปต่อสู้กับเหล่าร้ายเพื่อกอบกู้เสรีภาพ จุดเด่นคือสภาพแวดล้อมที่ "พัง" ได้เกือบทั้งหมด, ความโกลาหลแบบ Co-op 4 คน, และการที่คุณจะได้ตัวละครใหม่แบบสุ่มทุกครั้งที่ช่วยตัวประกัน ทำให้เกมเพลย์สดใหม่และคาดเดาไม่ได้ตลอดเวลา',
          score: "7/10",
          tags: ["Action", "2D Platformer", "Co-op", "Destructible"],
          pros: ["แอ็กชันสะใจ", "ตัวละครเยอะ", "ฉากพังได้", "Co-op 4 คน"],
          cons: ["เกมสั้น", "มั่วจนงง", "สุ่มตัวละคร"],
          steamUrl: "https://store.steampowered.com/app/274190/Broforce/",
        },
        {
          id: "warframe",
          title: "Warframe",
          iconUrl:
            "https://cdn2.steamgriddb.com/icon/83adc9225e4deb67d7ce42d58fe5157c.ico",
          youtubeId: "C3MnugBJc6g",
          description:
            'ดำดิ่งสู่ Warframe สุดยอดเกม Action RPG นินจาอวกาศแบบ Free-to-Play ที่โดดเด่นด้วยการต่อสู้สุดรวดเร็วสไตล์ Parkour สวมใส่ชุดเกราะ "Warframe" ที่มีให้เลือกกว่า 50 แบบ พร้อมพลังพิเศษเฉพาะตัว ออกฟาร์มทรัพยากร, สร้างอาวุธ, และปรับแต่งตัวละครของคุณได้อย่างไร้ขีดจำกัดในจักรวาล Sci-fi ที่กว้างใหญ่และมีเนื้อหาอัปเดตต่อเนื่อง นี่คือเกมยิงมุมมองบุคคลที่สาม (TPS) ที่ผสมผสานการต่อสู้ระยะประชิด, การยิงปืน, และสกิลเข้ากันได้อย่างลงตัว',
          score: "8.5/10",
          tags: ["Action RPG", "Looter Shooter", "Sci-fi", "Free to Play"],
          pros: [
            "เกมเพลย์ลื่นไหล",
            "แต่งตัวละครลึก",
            "สายฟรีอยู่ได้",
            "อัปเดตตลอด",
          ],
          cons: ["ระบบซับซ้อน", "ฟาร์มเยอะ"],
          steamUrl: "https://store.steampowered.com/app/230410/Warframe/",
        },
        
                {
          id: "pso2-ngs",
          title: "Phantasy Star Online 2: New Genesis",
          iconUrl: "icon/pso2-ngs.png",
          youtubeId: "FUpQiUw922E",
          description:
            'Phantasy Star Online 2: New Genesis (PSO2: NGS) คือการรีบูตครั้งใหญ่ของซีรีส์ MMORPG สุดคลาสสิก "Phantasy Star Online" ที่พาคุณสู่โลกอนาคตอันกว้างใหญ่ไพศาลบนดาว Halpha สัมผัสประสบการณ์การผจญภัยแบบ Open World, ระบบการต่อสู้ที่รวดเร็วและลื่นไหล, และกราฟิก Unreal Engine 4 ที่งดงาม นอกจากนี้ยังมีระบบสร้างตัวละครที่ลึกซึ้ง, ภารกิจและกิจกรรมหลากหลาย, และการเล่น Co-op กับเพื่อน ๆ เพื่อเผชิญหน้ากับศัตรูและบอสยักษ์ในจักรวาล Sci-fi ที่เต็มไปด้วยความลับ',
          score: "x/10",
          tags: [
            "MMORPG",
            "Open World",
            "Anime",
            "Sci-fi",
            "Action",
            "Live Service",
          ],
          pros: [
            "โลก Open World ที่กว้างใหญ่และสวยงาม",
            "ระบบการต่อสู้ที่รวดเร็วและลื่นไหล",
            "กราฟิก Unreal Engine 4 ที่น่าทึ่ง",
            "ระบบสร้างตัวละครที่มีความลึก",
          ],
          cons: [
            "ต้องเชื่อมต่ออินเทอร์เน็ตตลอดเวลา (Online-only)",
            "บางครั้งอาจมีปัญหาด้านเซิร์ฟเวอร์",
            "ระบบเกมซับซ้อนสำหรับผู้เล่นใหม่",
            "เนื้อเรื่องอาจจะไม่ลึกซึ้งเท่าภาคก่อนหน้า",
          ],
          steamUrl:
            "https://store.steampowered.com/app/1056640/Phantasy_Star_Online_2_New_Genesis/",
        },
        
        {
          id: "repo",
          title: "R.E.P.O.",
          iconUrl:
            "https://cdn2.steamgriddb.com/icon/1fec9ca0e635a1cfbe0cf157e0e3f5e1/32/256x256.png",
          youtubeId: "VY30CeEz3hg",
          description:
            'R.E.P.O. คือเกมอินดี้สยองขวัญมุมมองบุคคลที่หนึ่ง ที่จะพาคุณไปสัมผัสประสบการณ์การเป็น "พนักงานยึดทรัพย์" ในโลกหลังหายนะที่เต็มไปด้วยซอมบี้และอันตรายต่างๆ คุณจะต้องสำรวจ, ต่อสู้, และใช้ชีวิตรอดในโลกที่ถูกทำลายล้างนี้ โดยมีเป้าหมายเพื่อค้นหาความจริงและเอาชีวิตรอดให้ได้',
          score: "7.5/10",
          tags: ["Survival", "Horror", "Action", "Indie"],
          pros: [
            "บรรยากาศชวนหลอน",
            "เนื้อเรื่องน่าสนใจ",
            "กราฟิกสวยงาม",
            "เสียงประกอบสุดยอด",
          ],
          cons: [
            "อาจจะยากเกินไปสำหรับบางคน",
            "มีบั๊กบางประการ",
            "ต้องใช้สเปคคอมพิวเตอร์สูง",
          ],
          steamUrl: "https://store.steampowered.com/app/1234567890/REPO/",
        },
                {
          id: "sifu",
          title: "Sifu",
          iconUrl: "https://cdn2.steamgriddb.com/icon_thumb/a3b2404be3c558373c40906ef1dc5356.png",
          youtubeId: "VLfc_9p7wNk",
          description:
            'Sifu คือเกมแอ็กชันสไตล์ Beat \'em up ที่เน้นการต่อสู้ระยะประชิดด้วยศิลปะการป้องกันตัวแบบกังฟู (Kung Fu) คุณจะสวมบทบาทเป็นนักเรียนกังฟูที่ต้องออกตามล่าฆาตกรที่ฆ่าครอบครัวของเขา จุดเด่นของเกมคือระบบ "การแก้แค้น" ที่ไม่เหมือนใคร: ทุกครั้งที่คุณตาย ตัวละครจะมีอายุเพิ่มขึ้น ทำให้พลังชีวิตลดลง แต่ทักษะการต่อสู้จะพัฒนาขึ้น นี่คือเกมที่ผสมผสานการต่อสู้ที่ลื่นไหล, การวางแผนกลยุทธ์, และการเรียนรู้จากความผิดพลาดได้อย่างลงตัว',
          score: "x/10",
          tags: [
            "Action",
            "Beat 'em up",
            "Martial Arts",
            "Difficult",
            "Singleplayer",
            "Roguelite",
          ],
          pros: [
            "ระบบการต่อสู้ที่ลื่นไหลและมีความลึก",
            'คอนเซปต์ "การแก้แค้น" ที่ไม่เหมือนใคร',
            "กราฟิกและการออกแบบฉากที่มีสไตล์",
            "เพลงประกอบ (Soundtrack) ที่เพิ่มอารมณ์ในการเล่น",
          ],
          cons: [
            "เกมค่อนข้างสั้น (ถ้าเล่นแค่โหมดเนื้อเรื่อง)",
            "บางครั้งอาจจะรู้สึกซ้ำซากกับการต่อสู้",
            "การควบคุมอาจต้องใช้เวลาปรับตัว",
            "ไม่มีโหมด Co-op หรือ Multiplayer",
          ],
          steamUrl: "https://store.steampowered.com/app/2138710/Sifu/",
        },
                {
          id: "dragon-ball-sparkling-zero",
          title: "DRAGON BALL Sparking! ZERO",
          iconUrl: "https://cdn2.steamgriddb.com/icon/20086683a16f0f9ff5ee662afa9fbfbf.ico",
          youtubeId: "bvO39RbaAtQ",
          description:
            'การกลับมาของตำนานเกมต่อสู้ 3D Arena Fighter ในรอบ 17 ปี! DRAGON BALL: Sparking! ZERO คือการสานต่อจิตวิญญาณของซีรีส์ "Budokai Tenkaichi" อย่างแท้จริง ขนทัพตัวละครมาแบบจุใจที่สุดในประวัติศาสตร์เกมดราก้อนบอล (มากกว่า 180 ตัว) ให้คุณระเบิดพลังต่อสู้กันอย่างสะใจในสมรภูมิที่พังพินาศได้ กราฟิก Unreal Engine 5 ทำให้ท่าไม้ตายและการแปลงร่างอลังการสมจริงเหมือนหลุดออกมาจากอนิเมะ ถือเป็นเกมที่แฟนๆ สายต่อสู้แบบมันส์สะใจห้ามพลาด',
          score: "9.0/10",
          tags: [
            "Fighting",
            "Anime",
            "Action",
            "3D Fighter",
            "Versus",
            "Split-second Combat",
          ],
          pros: [
            "จำนวนตัวละครเยอะที่สุดในประวัติศาสตร์เกม DB",
            "กราฟิกและเอฟเฟกต์ (Unreal 5) สวยงามอลังการ",
            "เกมเพลย์ 3D Arena Fighter ที่รวดเร็วและคุ้นเคย",
            'โหมดเนื้อเรื่องมีฉาก "What If" ให้เล่น',
          ],
          cons: [
            "ไม่มี Local Split-Screen (เล่น 2 คนจอเดียวกันไม่ได้)",
            "โหมดเนื้อเรื่องถูกวิจารณ์ว่าใช้ภาพนิ่งเล่าเรื่องเยอะไป",
            "บางคนรู้สึกว่าเกมเพลย์ซ้ำซาก (เมื่อเทียบกับเกมไฟต์ติ้งยุคใหม่)",
            "การควบคุมอาจต้องใช้เวลาปรับตัว",
          ],
          steamUrl:
            "https://store.steampowered.com/app/1790600/DRAGON_BALL_Sparking_ZERO/",
        },
        {
          id: "mecha-break",
          title: "Mecha BREAK",
          iconUrl: "https://cdn2.steamgriddb.com/icon/e83193bbca16feb25ca7c49559317a7d/32/256x256.png",
          youtubeId: "C3MnugBJc6g",
          description:
            "Mecha BREAK คือเกมแอ็กชัน Sci-Fi สุดมันส์ ที่ให้คุณสวมบทบาทเป็นนักรบหุ่นยนต์ยักษ์ (Mech) ต่อสู้ในสงครามระหว่างกาแล็กซี่ ปรับแต่งหุ่นยนต์ของคุณให้เป็นเครื่องจักรสงครามสุดโหด และออกไปทำลายล้างศัตรูในสนามรบที่เต็มไปด้วยอันตรายและความท้าทาย",
          score: "8/10",
          tags: ["Action", "Sci-fi", "Mech", "Multiplayer"],
          pros: [
            "การต่อสู้ที่รวดเร็วและมันส์",
            "ปรับแต่งหุ่นยนต์ได้หลากหลาย",
            "โหมดผู้เล่นหลายคนสนุก",
            "กราฟิกสวยงาม",
          ],
          cons: [
            "อาจจะซับซ้อนสำหรับผู้เล่นใหม่",
            "บางครั้งอาจมีบั๊กเล็กน้อย",
            "ต้องใช้เวลาเรียนรู้ระบบต่างๆ",
          ],
          steamUrl: "https://store.steampowered.com/app/987654321/Mecha_BREAK/",
        },
        {
          id: "ace-combat-7",
          title: "ACE COMBAT 7: SKIES UNKNOWN",
          iconUrl: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5484a0af-71d9-4d3e-8a70-0ccc74268e4d/ddxpyxv-9641f0a3-9c78-43d8-940a-f8b9afc39f36.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi81NDg0YTBhZi03MWQ5LTRkM2UtOGE3MC0wY2NjNzQyNjhlNGQvZGR4cHl4di05NjQxZjBhMy05Yzc4LTQzZDgtOTQwYS1mOGI5YWZjMzlmMzYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.3rvbkYjtdMxyQ2Pn0WHd8nIFlWHwYhpU2misbW8dGK8",
          youtubeId: "rx6UpnPU0Eo",
          description:
            'ACE COMBAT 7: SKIES UNKNOWN คือการกลับมาอย่างยิ่งใหญ่ของราชาเกมขับเครื่องบินรบสไตล์อาร์เคด (Arcade Flight Combat) ที่พาคุณทะยานสู่ท้องฟ้าในโลก "Strangereal" สวมบทบาทนักบิน "Trigger" สัมผัสประสบการณ์การต่อสู้ทางอากาศ (Dogfight) ความเร็วสูง, ภารกิจทำลายล้าง, และการปะทะกับสุดยอดอาวุธยักษ์ (Superweapons) เกมโดดเด่นด้วยกราฟิก Unreal Engine 4 ที่งดงาม, เพลงประกอบสุดอลังการ, และระบบสภาพอากาศ (เช่น ก้อนเมฆหรือพายุสายฟ้า) ที่ส่งผลต่อการเล่นจริง นี่คือการผสมผสานที่ลงตัวระหว่างเกมเพลย์ที่เข้าถึงง่าย, มันส์สะใจ, และเนื้อเรื่องสุดดราม่าสไตล์อนิเมะการทหาร',
          score: "8.5/10",
          tags: ["Flight Action", "Arcade", "Jet", "Story Rich"],
          pros: ["ภาพสวย", "บินสนุก", "เพลงเทพ", "เนื้อเรื่องเข้ม"],
          cons: ["เนื้อเรื่องเบียว", "ภารกิจจับเวลา", "ไม่ใช่ Sim"],
          steamUrl:
            "https://store.steampowered.com/app/502500/ACE_COMBAT_7_SKIES_UNKNOWN/",
        },
        {
          id: "nfs-heat",
          title: "Need for Speed™ Heat",
          iconUrl:
            "https://cdn2.steamgriddb.com/icon_thumb/27952e90aad62b895d7bf8b36405a994.png",
          youtubeId: "bG844SBTS5s",
          description:
            'Need for Speed Heat พาคุณซิ่งสู่ Palm City เมืองสไตล์ไมอามี่ที่การแข่งขันแบ่งเป็นสองขั้วชัดเจน: "กลางวัน" แข่งขันอย่างถูกกฎหมายในอีเวนต์ Speedhunters Showdown เพื่อเก็บเงินแต่งรถ และ "กลางคืน" ที่คุณต้องซิ่งหนีตายจากการไล่ล่าของตำรวจสุดโหดเพื่อสร้างชื่อเสียง (REP) เกมนี้คือการกลับมาของรากเหง้า NFS ที่เน้นการแต่งรถ "JDM" และ "Tuner" ที่ลึกและหลากหลาย ผสมผสานกับการไล่ล่าของตำรวจที่ดุเดือดและท้าทาย',
          score: "9/10",
          tags: ["Racing", "Open World", "Street Racing", "Tuner"],
          pros: ["แต่งรถเทพ", "กลางวัน/คืน ต่างกัน", "ตำรวจโหด", "ภาพสวย"],
          cons: ["เนื้อเรื่องสั้น", "ขับแบบ Arcade", "แมพซ้ำ"],
          steamUrl:
            "https://store.steampowered.com/app/1222680/Need_for_Speed_Heat/",
        },
      ];

      // 2. ข้อมูลสมาชิก (Team Data)
      const teamMembers = [
        {
          name: "นายชัยกาญจน์ ขันธนิธิ",
          id: "68042995",
          role: "Presenter & InfoGraphic Designer",
          image: "https://i.ibb.co/R1wk1nx/Pond.jpg",
        },
        {
          name: "นายณชาศิลป์ นาเคณฑ์",
          id: "68040402",
          role: "Project Manager & Fullstack Dev",
          image: "https://i.ibb.co/LDPX4w1H/Fluke.jpg",
        },
        {
          name: "นายวสุธร ทรงสวัสดิ์วงศ์",
          id: "68094957",
          role: "Researcher",
          image: "https://i.ibb.co/Gf46jJ4v/Zhu.jpg",
        },
        {
          name: "นายกิตติพช พลวิชิต",
          id: "68078966",
          role: "Researcher",
          image: "https://i.ibb.co/MyXv3Lw1/Kong.jpg",
        },
        {
          name: "นายยศกร ทองคำแท้",
          id: "68037092",
          role: "Researcher",
          image: "https://i.ibb.co/fzYSGZtn/Put.jpg",
        },
      ];

      // 3. ข้อมูล Gallery (รูป Screenshot)
      const galleryData = [
        {
          img: "https://preview.redd.it/my-favorite-elden-ring-screenshot-v0-6tfcf335bu2d1.jpeg?width=1080&crop=smart&auto=webp&s=cce9ac3cf1e37ee8afc3798e67cbc7f7fbb20ab5",
          title: "Elden Ring",
        },
        {
          img: "https://preview.redd.it/ssrjqqhajd301.jpg?auto=webp&s=3893688787dc18582edf3b181004563ac261c202",
          title: "Monster Hunter: World",
        },
        { img: "https://i.redd.it/jp10mkojlwq21.jpg", title: "Warframe" },
        {
          img: "https://sm.ign.com/t/ign_nordic/gallery/m/mecha-brea/mecha-break-screenshots_67fj.1400.jpg",
          title: "Mecha BREAK",
        },
        {
          img: "https://cdn.mobygames.com/promos/7723315-ace-combat-7-skies-unknown-unexpected-visitor-screenshot.jpg",
          title: "ACE COMBAT 7",
        },
        {
          img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1903340/ss_483a27df5072beb3a4650634a764bda750fbcb82.jpg",
          title: "Clair Obscur: Expedition 33",
        },
        {
          img: "https://www.newgamenetwork.com/app/uploads/2025/10/bgate3_12_2.jpg",
          title: "Baldur\\'s Gate 3",
        },
        {
          img: "https://external-preview.redd.it/ub3mIgoTfNvWV7pk__mjexULumyoCtU2d0a9yxcRDdA.jpg?auto=webp&s=773f3370de26a9b46285535a367ee724caffdb07",
          title: "Devil May Cry 5",
        },
        {
          img: "https://i.redd.it/some-doom-eternal-screenshots-i-played-with-hdr-trying-to-v0-r97om364wufa1.jpg?width=1920&format=pjpg&auto=webp&s=08f67a7872d65a408f95efecb82bdbf832c3d08c",
          title: "Doom Eternal",
        },
        {
          img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1426210/ss_fdac523e3ea4d2f32a44449bb8c224857563bd7d.jpg",
          title: "It Take Two",
        },
        {
          img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/225540/ss_3f7f935e42ab9a7816a6e0f9442da5a5a6362789.jpg",
          title: "Just Cause 3",
        },
        {
          img: "https://static0.polygonimages.com/wordpress/wp-content/uploads/chorus/uploads/chorus_asset/file/6930859/no-mans-sky-4k-pc-screenshot-02_3840.0.jpg",
          title: "No Man's Sky",
        },
        {
          img: "https://images.steamusercontent.com/ugc/9522404311991638421/F245F2DF04C0644B432A482043DE315938F94C96/?imw=1024&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
          title: "Undertale",
        },
        { img: "https://i.redd.it/bw0zhcyykia31.png", title: "Astroneer" },
        {
          img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/362890/ss_b106c27ff03bb3162a6875dd22c4ce440e9694c4.jpg",
          title: "Black Mesa",
        },
        {
          img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/534380/ss_9ba79964c3878648a1469d263df7fb17fc3d521c.jpg",
          title: "Dying Light 2",
        },
        {
          img: "https://i.redd.it/ro4z0nbmja011.jpg",
          title: "Detroit Become Human",
        },
        {
          img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/282070/ss_2aebf3f26978369655c9d4316e627b084fa0a69e.jpg",
          title: "This War of Mine",
        },
      ];

      // 4. ข้อมูล FAQ (เพิ่ม/ลบคำถาม)
      const faqData = [
        {
          q: "เกณฑ์การให้คะแนนเกมมีอะไรบ้าง?",
          a: "เราพิจารณาจาก 4 ปัจจัยหลักคือ: <strong>Gameplay (ความสนุก), Graphics (ภาพ), Sound (เสียง), และ Story (เนื้อเรื่อง)</strong>",
        },
        {
          q: "สามารถแนะนำเกมให้รีวิวได้ที่ไหน?",
          a: "สามารถส่งรายชื่อเกมที่อยากให้รีวิวได้ผ่านหน้า <strong>Contact Us</strong> ได้เลยครับ",
        },
        {
          q: "เว็บไซต์รองรับ Dark Mode/Light Mode หรือไม่?",
          a: "รองรับครับ! กดไอคอนรูปพระอาทิตย์/พระจันทร์ ที่มุมขวาบนได้เลย",
        },
        {
          q: "สมาชิกในกลุ่มมีใครบ้าง?",
          a: "สามารถดูรายชื่อและหน้าที่ของสมาชิกทุกคนได้ที่หน้า <strong>About Us</strong> ครับ",
        },
        {
          q: "มีการอัปเดตข้อมูลเกมบ่อยแค่ไหน?",
          a: "ถ้าหากเว็บไซต์เราผ่านการคัดรอบ เราจะพยายามอัพเดทเพิ่มทุกเดือนที่มีเกมที่เป็นกระแสครับ",
        },
      ];

      /* --- Functions (Logic การทำงาน) --- */

      // Reveal on Scroll Function
      function revealOnScroll() {
        const reveals = document.querySelectorAll(".reveal:not(.active)");
        for (let i = 0; i < reveals.length; i++) {
            const windowHeight = window.innerHeight;
            const elementTop = reveals[i].getBoundingClientRect().top;
            if (reveals[i].offsetParent !== null && elementTop < windowHeight - 80) {
                reveals[i].classList.add("active");
            }
        }
      }

      /* --- 3D Particle Background Logic --- */
      (function () {
        const bgContainer = document.getElementById("canvas-bg");
        if (bgContainer) {
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(
            60,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
          );
          const renderer = new THREE.WebGLRenderer({
            alpha: true,
            antialias: true,
          });
          renderer.setSize(window.innerWidth, window.innerHeight);
          bgContainer.appendChild(renderer.domElement);

          const particlesGeometry = new THREE.BufferGeometry();
          const particlesCount = 600;
          const posArray = new Float32Array(particlesCount * 3);

          for (let i = 0; i < particlesCount; i++) {
            posArray[i * 3 + 0] = (Math.random() - 0.5) * 20;
            posArray[i * 3 + 1] = (Math.random() - 0.5) * 20;
            posArray[i * 3 + 2] = (Math.random() - 0.5) * 15;
          }
          particlesGeometry.setAttribute(
            "position",
            new THREE.BufferAttribute(posArray, 3)
          );

          const material = new THREE.PointsMaterial({
            size: 0.08,
            color: 0x6b0000,
            transparent: true,
            opacity: 0.6,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          });

          const particlesMesh = new THREE.Points(particlesGeometry, material);
          scene.add(particlesMesh);
          camera.position.z = 5;

          let mouseX = 0;
          let mouseY = 0;
          document.addEventListener("mousemove", (event) => {
            mouseX = event.clientX - window.innerWidth / 2;
            mouseY = event.clientY - window.innerHeight / 2;
          });

          const animateBg = () => {
            particlesMesh.rotation.y += 0.0008 + mouseX * 0.000003;
            particlesMesh.rotation.x += 0.0004 + mouseY * 0.000003;
            renderer.render(scene, camera);
            requestAnimationFrame(animateBg);
          };
          animateBg();

          window.addEventListener("resize", () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
          });
        }
      })();

      // ฟังก์ชันแปลงคะแนน (8/10) เป็นดาว
      function getStarHtml(scoreStr) {
        if (!scoreStr || scoreStr.includes("x")) return "";
        const score = parseFloat(scoreStr);
        let starsHtml = '<span class="star-rating">';
        const starCount = score / 2;
        for (let i = 1; i <= 5; i++) {
          if (starCount >= i) starsHtml += '<i class="fa-solid fa-star"></i>';
          else if (starCount >= i - 0.5)
            starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
          else starsHtml += '<i class="fa-regular fa-star"></i>';
        }
        starsHtml += "</span>";
        return starsHtml;
      }

      // ฟังก์ชันสร้าง Badge Tags
      // Normalize tags so the dropdown & badges use the same canonical categories
      const TAG_CANONICAL_MAP = {
        'Co-op': 'Multiplayer',
        'Co op': 'Multiplayer',
        'co-op': 'Multiplayer',
        'Multiplayer': 'Multiplayer',
        'Coop': 'Multiplayer',
        'Survival Horror': 'Survival',
        'Horror': 'Horror',
        'Survival': 'Survival',
        'FPS': 'Shooter',
        'Looter Shooter': 'Shooter',
        'Shooter': 'Shooter',
        '2D Platformer': 'Platformer',
        "Beat 'em up": 'Fighting',
        '3D Fighter': 'Fighting',
        'Fighting': 'Fighting',
        'Open World': 'Open World',
        'Action RPG': 'Action RPG',
        'Action': 'Action',
        'Arcade': 'Arcade',
        'Platformer': 'Platformer',
        'Racing': 'Racing',
        'Street Racing': 'Racing',
        'Tuner': 'Racing',
        'Flight Action': 'Flight',
        'Jet': 'Flight',
        'MMORPG': 'MMORPG',
        'Indie': 'Indie',
        'Sandbox': 'Sandbox',
        'Voxel': 'Voxel',
        'Isometric': 'Isometric',
        'Sci-fi': 'Sci-fi',
        'Mech': 'Mech',
        'Singleplayer': 'Singleplayer',
        'Story Rich': 'Story Rich',
        'Dark Fantasy': 'Dark Fantasy',
        'Souls-like': 'Souls-like',
        'Hardcore': 'Hardcore'
      };

      function normalizeTag(tag) {
        if (!tag || typeof tag !== 'string') return tag;
        const trimmed = tag.trim();
        if (TAG_CANONICAL_MAP[trimmed]) return TAG_CANONICAL_MAP[trimmed];
        // try case-insensitive mapping
        const foundKey = Object.keys(TAG_CANONICAL_MAP).find(k => k.toLowerCase() === trimmed.toLowerCase());
        if (foundKey) return TAG_CANONICAL_MAP[foundKey];
        // Fallback: title-case the tag
        return trimmed.replace(/(^|\s)([a-z])/g, (m, p1, p2) => p1 + p2.toUpperCase());
      }
      function getTagsHtml(tags) {
        if (!tags) return "";
        // Normalize tags before rendering badges
        return tags
          .map((tag) => normalizeTag(tag))
          .filter((t, idx, arr) => arr.indexOf(t) === idx) // unique
          .map(
            (tag) =>
              `<span class="badge rounded-pill badge-genre">${tag}</span>`
          )
          .join("");
      }

      // ฟังก์ชัน Render รายการเกม (และระบบค้นหา)
      function renderGameList() {
        const container = document.getElementById("game-list-container");
        if (!container) return;
        const search = (
          document.getElementById("game-search-input")?.value || ""
        )
          .toLowerCase()
          .trim();
        const tag = document.getElementById("game-tag-filter")?.value || "";
        let html = "";
        gameData.forEach((game, index) => {
          const titleMatch =
            !search || game.title.toLowerCase().includes(search);
          const tagsNormalized = (game.tags || []).map(normalizeTag);
          const tagMatch = !tag || (tagsNormalized && tagsNormalized.includes(tag));
          if (!titleMatch || !tagMatch) return;

          const isVideoLeft = index % 2 === 0;
          // Note: ใช้ referrerpolicy="no-referrer" เพื่อป้องกันรูปไม่ขึ้นในบางโฮสต์
          const iconElement = game.iconUrl
            ? `<img src="${game.iconUrl}" alt="${game.title} icon" width="78" onerror="this.style.display='none'" referrerpolicy="no-referrer" class="ms-2 rounded">`
            : "";

          html += `
            <div class="glass-panel game-card rounded-3 p-4 p-md-5 shadow-lg mb-5">
              <section id="game-${game.id}" class="row g-4 align-items-center">
                <div class="col-lg-6 ${isVideoLeft ? "" : "order-lg-2"}">
                  <div class="ratio ratio-16x9 video-wrapper">
                    <iframe src="https://www.youtube.com/embed/${
                      game.youtubeId
                    }" loading="lazy" allowfullscreen></iframe>
                  </div>
                </div>
                <div class="col-lg-6 ${isVideoLeft ? "" : "order-lg-1"}">
                  <h2 class="display-6 text-center">${
                    game.title
                  } ${iconElement}</h2>
                  <div class="text-center mb-3">${getTagsHtml(game.tags)}</div>
                  <p class="fs-5">${game.description}</p>
                  <div class="row mb-3">
                      <div class="col-md-6"><h5 class="text-success"><i class="fa-solid fa-circle-check"></i> จุดเด่น</h5><ul class="fs-6">${game.pros
                        .map((p) => `<li>${p}</li>`)
                        .join("")}</ul></div>
                      <div class="col-md-6"><h5 class="text-warning"><i class="fa-solid fa-circle-exclamation"></i> จุดด้อย</h5><ul class="fs-6">${game.cons
                        .map((c) => `<li>${c}</li>`)
                        .join("")}</ul></div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center flex-wrap gap-3">
                      <div class="d-flex align-items-center">${getStarHtml(
                        game.score
                      )}<h4 class="text-danger mb-0 fw-bold">${
            game.score
          }</h4></div>
                      <a class="btn btn-custom-shop" href="${
                        game.steamUrl
                      }" target="_blank"><i class="fa-solid fa-shop me-2"></i>ซื้อเกมนี้</a>
                  </div>
                </div>
              </section>
            </div>`;
        });
        container.innerHTML =
          html || '<div class="text-center py-5">ไม่พบเกมที่ค้นหา</div>';
        // Keep jump list in sync whenever the list is rendered/filtered
        if (typeof renderGameJumpList === 'function') renderGameJumpList();
      }

      // ฟังก์ชันสร้างรายการ Jump Menu (ลิสต์เกมแบบ Dropdown)
      function renderGameJumpList() {
        const list = document.getElementById("game-jump-list");
        if (!list) return;
        // Prefer reading the current DOM order of rendered game sections
        const container = document.getElementById('game-list-container');
        let items = [];
        if (container) {
          const sections = container.querySelectorAll('section[id^="game-"]');
          sections.forEach((sec) => {
            const id = sec.id;
            // Title is usually in h2; use textContent if present
            const h2 = sec.querySelector('h2');
            const title = (h2 && h2.textContent) ? h2.textContent.trim() : id;
            items.push({ id, title });
          });
        }
        // Fallback: if no sections are rendered, use the gameData order
        if (!items.length) {
          items = gameData.slice(0).map(g => ({ id: `game-${g.id}`, title: g.title }));
        }
        list.innerHTML = items
          .map(i => `<li><button class="dropdown-item text-truncate" type="button" data-target="#${i.id}" title="${i.title}">${i.title}</button></li>`)
          .join("");
        // Attach click handlers to close dropdown and smooth scroll
        list.querySelectorAll('button.dropdown-item').forEach(btn => {
          btn.addEventListener('click', (ev) => {
            ev.preventDefault();
            const targetId = btn.dataset.target;
            // Hide the dropdown first to avoid weird position shifting
            try { bootstrap.Dropdown.getOrCreateInstance(document.getElementById('gameJumpMenu')).hide(); } catch(e) {}
            // Smooth scroll to the target element
            const el = document.querySelector(targetId);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              // After scroll, add keyboard focus for accessibility
              setTimeout(() => { el.setAttribute('tabindex', '-1'); el.focus(); }, 600);
            }
          });
        });
      }

      // ฟังก์ชัน Render หน้าทีมงาน (About Us)
      function renderTeamGrid() {
              const container = document.getElementById("team-grid");
        if (!container) return;
        const createCard = (m) => `
          <div class="col-md-6 col-lg-4">
            <div class="theme-bg rounded-3 p-4 text-center profile-card shadow-lg">
              <div class="profile-img-wrapper">
                <img src="${m.image}" alt="${m.name}" referrerpolicy="no-referrer">
              </div>
              <div class="role-badge shadow-sm">${m.role}</div>
              <h3 class="mb-1 fs-3">${m.name}</h3>
              <p class="student-id mb-0"><i class="fa-solid fa-id-card me-2"></i>${m.id}</p>
            </div>
          </div>`;
        container.innerHTML = `<div class="row g-4 justify-content-center mb-4">${teamMembers
          .slice(0, 3)
          .map(createCard)
          .join(
            ""
          )}</div><div class="row g-4 justify-content-center">${teamMembers
          .slice(3, 5)
          .map(createCard)
          .join("")}</div>`;
      }

      // ฟังก์ชัน Render Gallery พร้อมปุ่มกดดูรูปใหญ่ (Modal Trigger)
      function renderGallery() {
        const container = document.getElementById("gallery-grid");
        if (!container) return;

        let html = "";
        galleryData.forEach((item) => {
          html += `
            <div class="col-md-4">
                <div class="gallery-item ratio ratio-16x9" onclick="showGalleryModal('${item.img}', '${item.title}')">
                    <img src="${item.img}" alt="${item.title}" referrerpolicy="no-referrer">
                    <div class="gallery-overlay">
                        <div class="gallery-title">${item.title}</div>
                        <div class="gallery-desc"><i class="fa-solid fa-eye me-1"></i> คลิกเพื่อดูรูปใหญ่</div>
                    </div>
                </div>
            </div>`;
        });
        container.innerHTML = html;
      }

      // ฟังก์ชันเปิด Modal รูปภาพขนาดใหญ่
      function showGalleryModal(imgSrc, title) {
        document.getElementById("galleryModalImg").src = imgSrc;
        document.getElementById("galleryModalTitle").textContent = title;
        const myModal = new bootstrap.Modal(
          document.getElementById("galleryModal")
        );
        myModal.show();
      }

      // ฟังก์ชัน Render FAQ (Accordion)
      function renderFAQ() {
        const container = document.getElementById("faqAccordion");
        if (!container) return;

        let html = "";
        faqData.forEach((item, index) => {
          const isFirst = index === 0;
          html += `
            <div class="accordion-item mb-3 rounded overflow-hidden">
              <h2 class="accordion-header" id="heading${index}">
                <button class="accordion-button ${
                  isFirst ? "" : "collapsed"
                }" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="${isFirst}" aria-controls="collapse${index}">
                  <strong>Q: ${item.q}</strong>
                </button>
              </h2>
              <div id="collapse${index}" class="accordion-collapse collapse ${
            isFirst ? "show" : ""
          }" aria-labelledby="heading${index}" data-bs-parent="#faqAccordion">
                <div class="accordion-body">
                  ${item.a}
                </div>
              </div>
            </div>`;
        });
        container.innerHTML = html;
      }

      // ฟังก์ชันสร้างตัวเลือก Filter (Tag)
      function initFilters() {
        const tagSelect = document.getElementById("game-tag-filter");
        const allTags = new Set();
        gameData.forEach((g) => g.tags.forEach((t) => allTags.add(normalizeTag(t))));
        if (tagSelect) {
          tagSelect.innerHTML =
            '<option value="">ทุกแนวเกม</option>' +
            Array.from(allTags)
              .sort()
              .map((t) => `<option value="${t}">${t}</option>`)
              .join("");
        }
        // Build the custom dropdown menu too
        const tagDropdown = document.getElementById('game-tag-dropdown');
        const tagToggler = document.getElementById('tagDropdownToggler');
        if (tagDropdown && tagToggler && tagSelect) {
          tagDropdown.innerHTML = '<li><button class="dropdown-item text-truncate" data-value="">ทุกแนวเกม</button></li>' + Array.from(allTags).sort().map(t => `<li><button class="dropdown-item text-truncate" data-value="${t}">${t}</button></li>`).join('');
          // Update toggler label if a value is set
          const updateTogglerLabel = (value) => {
            const label = value ? value : 'ทุกแนวเกม';
            tagToggler.textContent = label;
          }
          updateTogglerLabel(tagSelect.value);
          // Ensure toggler label updates when native select changes (e.g., keyboard input)
          tagSelect.addEventListener('change', () => updateTogglerLabel(tagSelect.value));

          // Wire up click events to set the hidden select value and trigger change
          tagDropdown.querySelectorAll('.dropdown-item').forEach(btn => {
            btn.addEventListener('click', (ev) => {
              ev.preventDefault();
              const value = btn.dataset.value || '';
              if (tagSelect) {
                tagSelect.value = value;
                // Dispatch change so renderGameList() listens as before
                tagSelect.dispatchEvent(new Event('change', { bubbles: true }));
              }
              updateTogglerLabel(value);
            });
          });
        }
      }

      /* ---------------- API Logic (CheapShark) ---------------- */
      // ใช้ CheapShark API เพื่อดึงข้อมูลเกมลดราคาแบบ Real-time (ไม่ติด CORS)
      async function fetchSteamTopSellers() {
        const container = document.getElementById("steam-api-container");
        const url =
          "https://www.cheapshark.com/api/1.0/deals?storeID=1&sortBy=SteamRating&pageSize=6&onSale=1";

        try {
          const response = await fetch(url);
          if (!response.ok) throw new Error("Connection Failed");
          const games = await response.json();
          let html = "";
          games.forEach((game) => {
            const price = Math.ceil(game.salePrice * 35).toLocaleString();
            const oldPrice = Math.ceil(game.normalPrice * 35).toLocaleString();
            const discount = Math.round(game.savings);

            html += `
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 theme-bg border-danger shadow-sm" style="transition: transform 0.3s;">
                        <div style="height: 200px; overflow: hidden; position: relative;">
                            <img src="${
                              game.thumb
                            }" class="card-img-top w-100 h-100" style="object-fit: cover;" alt="${
              game.title
            }">
                            ${
                              discount > 0
                                ? `<span class="badge bg-danger position-absolute top-0 end-0 m-2">-${discount}%</span>`
                                : ""
                            }
                        </div>
                        <div class="card-body d-flex flex-column">
                            <h5 class="card-title text-truncate" title="${
                              game.title
                            }">${game.title}</h5>
                            <div class="mb-3">
                                <div class="d-flex align-items-center gap-2">
                                    <span class="text-danger fs-5 fw-bold">฿${price}</span>
                                    ${
                                      discount > 0
                                        ? `<small class="text-decoration-line-through opacity-50">฿${oldPrice}</small>`
                                        : ""
                                    }
                                </div>
                            </div>
                            <div class="mt-auto d-flex justify-content-between align-items-center">
                                <small class="text-success"><i class="fa-solid fa-thumbs-up"></i> ${
                                  game.steamRatingPercent
                                }% Positive</small>
                                <a href="https://store.steampowered.com/app/${
                                  game.steamAppID
                                }" target="_blank" class="btn btn-sm btn-outline-danger">
                                    <i class="fa-brands fa-steam me-1"></i> Steam
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`;
          });
          container.innerHTML = html;
        } catch (error) {
          console.error("API Error:", error);
          container.innerHTML = `<div class="col-12 text-center py-5 text-danger">ไม่สามารถดึงข้อมูลได้ (API Error)</div>`;
        }
      }

      /* --- Utility Logic --- */

      // Logic จัดการ Theme (Dark/Light)
      function applyTheme(theme) {
        const body = document.body;
        const icon = document.getElementById("themeIcon");
        const navbar = document.querySelector(".navbar");
        if (theme === "light") {
          body.setAttribute("data-theme", "light");
          if (icon) icon.classList.replace("fa-sun", "fa-moon");
          if (navbar) {
            navbar.classList.remove("navbar-dark", "bg-dark");
            navbar.classList.add("navbar-light", "bg-light");
          }
        } else {
          body.removeAttribute("data-theme");
          if (icon) icon.classList.replace("fa-moon", "fa-sun");
          if (navbar) {
            navbar.classList.remove("navbar-light", "bg-light");
            navbar.classList.add("navbar-dark", "bg-dark");
          }
        }
        localStorage.setItem("theme", theme);
        // Update logo based on theme
        try {
          const logo = document.getElementById('mainLogo');
          if (logo && logo.dataset) {
            logo.src = theme === 'light' ? logo.dataset.light : logo.dataset.dark;
          }
        } catch (e) {
          /* ignore */
        }
      }
      function toggleTheme() {
        applyTheme(
          document.body.getAttribute("data-theme") === "light"
            ? "dark"
            : "light"
        );
      }

      // Logic สลับหน้า (Single Page Application - SPA)
      function switchPage(pageId) {
        const sections = [
          "home",
          "about",
          "gallery",
          "faq",
          "contact",
        ];
        sections.forEach((s) => {
          const el = document.getElementById(s + "-section");
          if (el) el.classList.toggle("d-none-section", s !== pageId);

          // Update Active Class ใน Navbar
          const navMob = document.getElementById("nav-" + s + "-mobile");
          const navDesk = document.getElementById("nav-" + s + "-desktop");
          if (navMob) navMob.classList.toggle("active-custom", s === pageId);
          if (navDesk) navDesk.classList.toggle("active-custom", s === pageId);
        });
        window.scrollTo(0, 0);
        // ปิด Offcanvas อัตโนมัติเมื่อกดเลือกในมือถือ
        const bsOffcanvas = bootstrap.Offcanvas.getInstance(
          document.getElementById("mySidenav")
        );
        if (bsOffcanvas) bsOffcanvas.hide();
        setTimeout(revealOnScroll, 50);
      }

      // เริ่มต้นการทำงานเมื่อโหลดเว็บเสร็จ (Initialization)
      document.addEventListener("DOMContentLoaded", () => {
        applyTheme(localStorage.getItem("theme") || "dark");
        renderGameList();
        renderGameJumpList();
        renderTeamGrid();
        renderGallery();
        renderFAQ();
        initFilters();
        
        // Add scroll listener for animations
        window.addEventListener('scroll', revealOnScroll);
        setTimeout(revealOnScroll, 100);

        // ผูก Event Listeners (การค้นหาและฟิลเตอร์)
        document
          .getElementById("game-search-input")
          ?.addEventListener("input", renderGameList);
        document
          .getElementById("game-tag-filter")
          ?.addEventListener("change", renderGameList);

        // Contact Form Mockup
        document
          .getElementById("contact-form")
          ?.addEventListener("submit", (e) => {
            e.preventDefault();
            const btn = document.getElementById("contact-submit-btn");
            const status = document.getElementById("contact-status");
            btn.disabled = true;
            status.innerHTML =
              '<div class="alert alert-info mt-2">กำลังส่ง...</div>';
            setTimeout(() => {
              status.innerHTML =
                '<div class="alert alert-success mt-2">ส่งเรียบร้อย!</div>';
              btn.disabled = false;
              e.target.reset();
            }, 1000);
          });

          // Ensure the Game Jump dropdown floats above the page elements even when
          // other elements might create stacking contexts. We calculate and set
          // a fixed position for the dropdown on open, and reset on close.
          (function ensureJumpDropdownVisible() {
            const btn = document.getElementById('gameJumpMenu');
            const menu = document.getElementById('game-jump-list');
            const origParent = menu ? menu.parentNode : null;
            const origNextSibling = menu ? menu.nextSibling : null;
            if (!btn || !menu) return;

            // We do not manually position the menu to avoid conflicting with Popper,
            // which handles placement; instead we will reparent the menu to body and
            // only set a high z-index when open so it floats above the layout.

            btn.addEventListener('shown.bs.dropdown', function (e) {
              // After the dropdown is shown by Bootstrap we move it to the body so
              // it escapes any ancestor stacking context; Popper will handle
              // correct placement while it is appended to the body, so we do not
              // apply manual left/top transforms.
              setTimeout(function () {
                menu.classList.add('fixed-top-drawer');
                menu.style.setProperty('z-index', '999999', 'important');
                if (!menu.__wasReparented) {
                  menu.__origParent = origParent;
                  menu.__origNextSibling = origNextSibling;
                  document.body.appendChild(menu);
                  menu.__wasReparented = true;
                  // Ask popper to recalculate placement now the node is in body
                  try { const dd = bootstrap.Dropdown.getOrCreateInstance(btn); if (dd && dd._popper) dd._popper.update(); } catch (e) {}
                }
              }, 10);
            });
            btn.addEventListener('hidden.bs.dropdown', function () {
              menu.classList.remove('fixed-top-drawer');
              try { menu.style.removeProperty('z-index'); } catch(e) {}
              // Try to restore the menu to its original location in the DOM
              try {
                if (menu.__wasReparented && menu.__origParent) {
                  menu.__origParent.insertBefore(menu, menu.__origNextSibling);
                  menu.__wasReparented = false;
                }
              } catch (err) {
                // ignore
              }
            });
            // Also update popper's placement on resize & scroll while open
            window.addEventListener('resize', function () {
              if (btn.getAttribute('aria-expanded') === 'true') {
                try { const dd = bootstrap.Dropdown.getOrCreateInstance(btn); if (dd && dd._popper) dd._popper.update(); } catch (e) {}
              }
            });
            window.addEventListener('scroll', function () {
              if (btn.getAttribute('aria-expanded') === 'true') {
                try { const dd = bootstrap.Dropdown.getOrCreateInstance(btn); if (dd && dd._popper) dd._popper.update(); } catch (e) {}
              }
            });
          })();
        // Ensure the Tag dropdown floats above content as well so it matches theme and escapes clipping
        (function ensureTagDropdownVisible(){
          const toggler = document.getElementById('tagDropdownToggler');
          const menu = document.getElementById('game-tag-dropdown');
            if (!toggler || !menu) return;
          const origParent = menu.parentNode;
          const origNext = menu.nextSibling;

          // We do not set style.left/top; we rely on Popper from Bootstrap dropdown
          // to take care of placement after we reparent to body.
          toggler.addEventListener('shown.bs.dropdown', function(){
            setTimeout(function(){
              menu.classList.add('fixed-top-drawer');
              if (!menu.__tagWasReparented){
                const insideOffcanvas = toggler.closest('.offcanvas');
                menu.__tagOrigParent = origParent;
                menu.__tagOrigNextSibling = origNext;
                if (!insideOffcanvas) {
                  document.body.appendChild(menu);
                  menu.__tagWasReparented = true;
                  try { const dd = bootstrap.Dropdown.getOrCreateInstance(toggler); if (dd && dd._popper) dd._popper.update(); } catch (e) {}
                }
              }
            }, 10);
          });
          toggler.addEventListener('hidden.bs.dropdown', function(){
            menu.classList.remove('fixed-top-drawer');
            try { menu.style.removeProperty('z-index'); } catch(e) {}
            try{
              if (menu.__tagWasReparented && menu.__tagOrigParent) menu.__tagOrigParent.insertBefore(menu, menu.__tagOrigNextSibling);
              menu.__tagWasReparented = false;
            }catch(e){}
          });
          window.addEventListener('resize', function(){ if (toggler.getAttribute('aria-expanded') === 'true') { try { const dd = bootstrap.Dropdown.getOrCreateInstance(toggler); if (dd && dd._popper) dd._popper.update(); } catch(e){} } });
          window.addEventListener('scroll', function(){ if (toggler.getAttribute('aria-expanded') === 'true') { try { const dd = bootstrap.Dropdown.getOrCreateInstance(toggler); if (dd && dd._popper) dd._popper.update(); } catch(e){} } });
        })();
      });

      // ปุ่ม Back to Top Logic
      const mybutton = document.getElementById("btn-back-to-top");
      window.onscroll = () => {
        mybutton.style.display =
          document.body.scrollTop > 200 ||
          document.documentElement.scrollTop > 200
            ? "block"
            : "none";
      };
      mybutton.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      });

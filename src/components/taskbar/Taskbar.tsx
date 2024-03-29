import { TaskBar, List } from '@react95/core';
import { Main200, MsnsignIcoApp, Wininet32546, Winhlp324000, Mail, Mapi32801, Mcm502, Awfxcg321305, Wmsui323924, Notepad2, Mspaint, Mailnews20, Mmsys113, Wordpad } from '@react95/icons'

function Taskbar(openAbout: (event: React.MouseEvent<Element, MouseEvent>) => void,
                 openCredits: (event: React.MouseEvent<Element, MouseEvent>) => void) {
  return (
    <TaskBar
        list={
          <List>
            <List.Item
            icon={<Wmsui323924 variant="32x32_4"/>}>
              Documents
              <List>
                <List.Item
                icon={<Mmsys113 variant="32x32_4"/>}
                onClick={() =>
                  window
                    .open('https://hukasx0.github.io/portfolio/projects', '_blank')
                    ?.focus()
                }
              >
              projects.html
              </List.Item>
              <List.Item
                icon={<Notepad2 variant="32x32_4"/>}
                onClick={openAbout}
              >
              about_me.txt
              </List.Item>
              <List.Item
                icon={<Mmsys113 variant="32x32_4"/>}
                onClick={() =>
                  window
                    .open('https://hukasx0.github.io/portfolio/', '_blank')
                    ?.focus()
                }
              >
              skills.html
              </List.Item>
              <List.Item
                icon={<Mmsys113 variant="32x32_4"/>}
                onClick={() =>
                  window
                    .open('https://hukasx0.github.io/portfolio/', '_blank')
                    ?.focus()
                }
              >
              Portfolio.html
              </List.Item>
              <List.Item
                icon={<Mmsys113 variant="32x32_4"/>}
                onClick={() =>
                  window
                    .open('https://hukasx0.github.io/blog/', '_blank')
                    ?.focus()
                }
              >
              Blog.html
              </List.Item>
              </List>
            </List.Item>
            <List.Item
              icon={<MsnsignIcoApp variant='32x32_4' />}>
              Socials
              <List>
              <List.Item
                icon={<Main200 variant='32x32_1' />}
                onClick={() =>
                    window
                      .open('https://github.com/Hukasx0', '_blank')
                      ?.focus()
                  }
                >
                GitHub
                </List.Item>
                <List.Item
                icon={<Mapi32801 variant='16x16_4' />}
                onClick={() =>
                    window
                      .open('https://misskey.gg/@Hukasx0', '_blank')
                      ?.focus()
                  }
                >
                Misskey
                </List.Item>
                <List.Item
                icon={<Wininet32546 variant='16x16_4' />}
                onClick={() =>
                    window
                      .open('https://tryhackme.com/p/Hukasx0', '_blank')
                      ?.focus()
                  }
                >
                TryHackMe
                </List.Item>
                <List.Item
                icon={<Mcm502 variant='32x32_4' />}
                onClick={() =>
                    window
                      .open('https://app.hackthebox.com/profile/696093', '_blank')
                      ?.focus()
                  }
                >
                HackTheBox
                </List.Item>
                <List.Item
                icon={<Awfxcg321305 variant='32x32_4' />}
                onClick={() =>
                    window
                      .open('https://leetcode.com/Hukasx0/', '_blank')
                      ?.focus()
                  }
                >
                Leetcode
                </List.Item>
              </List>
            </List.Item>
            <List.Item
                icon={<Mail variant='32x32_4' />}
                onClick={() => {
                  window.location.href = `https://hukasx0.github.io/portfolio/contact`;
                }}
                >
              Contact
            </List.Item>
            <List.Item
                icon={<Wordpad variant="32x32_4"/>}
                onClick={() =>
                  window
                    .open('https://hukasx0.github.io/portfolio/', '_blank')
                    ?.focus()
                }
              >
              Portfolio
            </List.Item>
            <List.Item
                icon={<Mspaint variant="32x32_4"/>}
                onClick={() =>
                  window
                    .open('https://hukasx0.github.io/portfolio/', '_blank')
                    ?.focus()
                }
                >
              Skills
            </List.Item>
            <List.Item
                icon={<Winhlp324000 variant='32x32_4' />}
                onClick={openAbout}
                >
              About me
            </List.Item>
            <List.Divider />
            <List.Item
                icon={<Mailnews20 variant='32x32_4' />}
                onClick={openCredits}
                >
              Credits
            </List.Item>
          </List>
        }
      />
  )
}

export default Taskbar

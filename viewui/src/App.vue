<template>
	<div class="layout">
		<Layout>
			<Header>
				<div class="layout-header-title">
					数据管理平台
				</div>
				<div class="login-out">
					<div class="username" />
					<Dropdown trigger="click">
						<a href="javascript:void(0)">
							jeff
							<Icon type="ios-arrow-down" />
						</a>
						<DropdownMenu slot="list">
							<DropdownItem name="logout">登出</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</div>
			</Header>
			<Layout :style="{padding: '0 5px'}">
				<Content :style="{padding: '24px 0', minHeight: '280px'}">
					<Layout>
						<Sider hide-trigger>
							<Menu active-name="1-2" width="auto">
								<Submenu name="1">
									<template slot="title">
										<Icon type="ios-navigate"></Icon>
										系统管理
									</template>
									<MenuItem name="1-1">配置列表</MenuItem>
									<MenuItem name="1-2">数据查询</MenuItem>
								</Submenu>
							</Menu>
						</Sider>
						<Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
							Content
						</Content>
					</Layout>
				</Content>
			</Layout>
		</Layout>
	</div>
</template>
<script>
	export default {
		name: 'App'
	}
</script>

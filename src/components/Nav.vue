<template>
	<nav :class="{'is-open': isNavOpen}">
		<ul>
			<li class="is-active">
				<button>
					🐱‍👓Holiday in Japan
					<span>
						2 / 6
					</span>
				</button>
			</li>
			<li>
				<button>
					🚀 Bucket list
					<span>
						3 / 7
					</span>
				</button>
			</li>
			<li>
				<button>
					🥗 Groceries
					<span>
						5 / 5
					</span>
				</button>
			</li>
			<li>
				<button>
					📁 Work
					<span>
						1 / 2
					</span>
				</button>
			</li>
			<li>
				<button>
					📷 Photography
					<span>
						1 / 1
					</span>
				</button>
			</li>
			<li>
				<button class="is-add">Create a new list</button>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	props: ['isNavOpen'],
	data(){
		return {
			
		}
	}
}
</script>

<style>
</style>
